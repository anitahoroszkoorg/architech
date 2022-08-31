import os

from bs4 import BeautifulSoup, Tag
from requests import Session
from zeep import Client, Transport

# WSDL = 'https://wyszukiwarkaregontest.stat.gov.pl/wsBIR/wsdl/UslugaBIRzewnPubl.xsd'
from architech import crud
from architech.schemas import SPECIFIC_LEGAL_FORMS, LEGAL_FORMS

WSDL = 'https://wyszukiwarkaregontest.stat.gov.pl/wsBIR/wsdl/UslugaBIRzewnPubl-ver11-test.wsdl'
ENDPOINT = 'https://wyszukiwarkaregon.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc'
ENDPOINT_SANDBOX = 'https://wyszukiwarkaregontest.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc'


class CompanyNotFoundError(Exception):
    pass


class GUS(object):
    endpoint = ENDPOINT
    headers = {'User-Agent': 'gusregon'}
    pkd_report_type = {
        'F': 'BIR11OsFizycznaPkd',
        'P': 'BIR11OsPrawnaPkd',
    }
    report_type = {
        'F': {
            '1': 'BIR11OsFizycznaDzialalnoscCeidg',
            '2': 'BIR11OsFizycznaDzialalnoscRolnicza',
            '3': 'BIR11OsFizycznaDzialalnoscPozostala',
            '4': 'BIR11OsFizycznaDzialalnoscSkreslonaDo20141108'},
        'LF': 'BIR11JednLokalnaOsFizycznej',
        'P': 'BIR11OsPrawna',
        'LP': 'BIR11JednLokalnaOsPrawnej',
    }

    def __init__(self, api_key=None, sandbox=False):
        if not any([api_key, sandbox]):
            raise AttributeError('Api key is required.')
        self.api_key = api_key
        self.sandbox = sandbox
        if sandbox:
            self.api_key = api_key or 'abcde12345abcde12345'
            self.endpoint = ENDPOINT_SANDBOX
        transport = Transport(session=Session())
        transport.session.headers = self.headers
        client = Client(WSDL, transport=transport)
        self.service = client.create_service('{http://tempuri.org/}e3', self.endpoint)
        self.headers.update({'sid': self._service('Zaloguj', self.api_key)})

    def _service(self, action, *args, **kwargs):
        service = getattr(self.service, action)
        return service(*args, **kwargs)

    def _remove_prefix(self, data):
        data = {item.name: item.get_text()
                for item in BeautifulSoup(data, 'lxml').dane if isinstance(item, Tag)}
        parsed_data = {}
        for name, value in data.items():
            parsed_data[name.split('_', 1)[1]] = value.strip()
        return parsed_data

    def _get_details(self, nip=None, regon=None, krs=None):
        if not any([nip, regon, krs]):
            raise AttributeError(
                'At least one parameter (nip, regon, krs) is required.')
        if nip:
            search_params = {'Nip': nip}
        elif regon:
            search_params = {'Regon': regon}
        else:
            search_params = {'Krs': krs}
        return self._service('DaneSzukajPodmioty', search_params)

    def search(self, *args, **kwargs):
        details = self._get_details(*args, **kwargs)
        if details is not None:
            data = BeautifulSoup(details, 'lxml')
            if data.typ is None:
                raise CompanyNotFoundError
            report_type = self.report_type.get(data.typ.get_text())
            if isinstance(report_type, dict):
                report_type = report_type.get(data.silosid.get_text())
            return self._remove_prefix(self._service(
                'DanePobierzPelnyRaport', data.regon.get_text(), report_type))

    def get_pkd(self, *args, **kwargs):
        pkd = []
        details = self._get_details(*args, **kwargs)
        if details is not None:
            data = BeautifulSoup(details, 'lxml')
            report_type = self.pkd_report_type.get('F')
            if 'P' in data.typ.get_text():
                report_type = self.pkd_report_type.get('P')
            report = self._service(
                'DanePobierzPelnyRaport', data.regon.get_text(), report_type)
            if report is not None:
                for item in BeautifulSoup(report, 'lxml').find_all('dane'):
                    data = {i.name.split('_', 1)[1].replace('_', '').lower(): i.get_text()
                            for i in item.children if isinstance(i, Tag)}
                    pkd.append({
                        'code': data['pkdkod'],
                        'name': data['pkdnazwa'],
                        'main': data['pkdprzewazajace'] == '1'})
                pkd = [dict(t) for t in set([tuple(d.items()) for d in pkd])]
        return pkd

    def get_address(self, *args, **kwargs):
        details = self.search(*args, **kwargs)
        if details:
            postal_code = details['adsiedzkodpocztowy']
            address = '%s %s' % (details['adsiedzulica_nazwa'],
                                 details['adsiedznumernieruchomosci'])
            if details['adsiedznumerlokalu']:
                address += '/%s' % details['adsiedznumerlokalu']
            return {
                'name': details['nazwa'],
                'street_address': address,
                'postal_code': '%s-%s' % (postal_code[:2], postal_code[2:]),
                'city': details['adsiedzmiejscowosc_nazwa']}


def fetch_data_from_gus(nip, db):
    print('FETCHING FROM API')
    gus_client = GUS(os.environ.get('GUS_API_KEY'))
    response = gus_client.search(nip=nip)

    postal_code = response['adsiedzkodpocztowy']
    postal_code = f'{postal_code[:2]}-{postal_code[2:]}'

    legal_form = response.get('podstawowaformaprawna_symbol', '9')
    specific_legal_form = response.get('szczegolnaformaprawna_symbol', '099')

    result = {
        'name': response['nazwa'],
        'address': response['adsiedzulica_nazwa'],
        'address_number': response['adsiedznumernieruchomosci'],
        'local_number': response['adsiedznumerlokalu'],
        'city': response['adsiedzmiejscowosc_nazwa'],
        'regon': response['regon9'],
        'postal_code': postal_code,
        'legal_form': {
            'name': LEGAL_FORMS[legal_form],
        },

        'specific_legal_form': {
            'name': SPECIFIC_LEGAL_FORMS[specific_legal_form],
        },
    }
    crud.save_gus_response(nip=nip, result=result, db=db)
    return result
