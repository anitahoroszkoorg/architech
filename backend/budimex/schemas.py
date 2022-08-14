from typing import Optional

from pydantic import BaseModel
from pydantic import BaseModel, validator

LEGAL_FORMS = {
    '1': 'osoba prawna',
    '2': 'jednostka organizacyjna niemająca osobowości prawna',
    '9': 'osoba fizyczna prowadząca działalność gospodarczą',
}

SPECIFIC_LEGAL_FORMS = {
    '019': 'spółki cywilne prowadzące działalność na podstawie umowy zawartej zgodnie z Kodeksem cywilnym',
    '023': 'spółki przewidziane w przepisach innych ustaw niż Kodeks spółek handlowych i'
           ' Kodeks cywilny lub formy prawne, do których stosuje się przepisy o spółkach',
    '044': 'uczelnie',
    '049': 'fundusze',
    '050': 'Kościół Katolicki',
    '051': 'inne kościoły i związki wyznaniowe',
    '053': 'europejskie ugrupowanie współpracy terytorialnej',
    '055': 'stowarzyszenia niewpisane do KRS',
    '060': 'organizacje społeczne oddzielnie niewymienione niewpisane do KRS',
    '070': 'partie polityczne',
    '076': 'samorządy gospodarcze i zawodowe niewpisane do KRS',
    '080': 'przedstawicielstwa zagraniczne',
    '085': 'wspólnoty mieszkaniowe',
    '099': 'osoby fizyczne prowadzące działalność gospodarczą',
    '114': 'europejskie zgrupowania interesów gospodarczych',
    '116': 'spółki akcyjne',
    '117': 'spółki z ograniczoną odpowiedzialnością',
    '118': 'spółki jawne',
    '115': 'spółki partnerskie',
    '120': 'spółki komandytowe',
    '121': 'spółki komandytowo-akcyjne',
    '122': 'spółki europejskie',
    '124': 'przedsiębiorstwa państwowe',
    '126': 'towarzystwa ubezpieczeń wzajemnych',
    '132': 'instytucje gospodarki budżetowej',
    '133': 'związki zawodowe rolników indywidualnych',
    '134': 'towarzystwa reasekuracji wzajemnej',
    '135': 'główne oddziały zagranicznych zakładów reasekuracji',
    '136': 'główne oddziały zagranicznych zakładów ubezpieczeń',
    '137': 'ogólnokrajowe zrzeszenia międzybranżowe',
    '138': 'ogólnokrajowe związki międzybranżowe',
    '140': 'spółdzielnie',
    '142': 'spółdzielnie europejskie',
    '143': 'związki rolników, kółek i organizacji rolniczych',
    '145': 'związki rolniczych zrzeszeń branżowych',
    '146': 'samodzielne publiczne zakłady opieki zdrowotnej',
    '147': 'cechy rzemieślnicze',
    '148': 'fundacje',
    '152': 'izby rzemieślnicze',
    '154': 'Związek Rzemiosła Polskiego',
    '155': 'stowarzyszenia',
    '156': 'związki stowarzyszeń',
    '157': 'stowarzyszenia kultury fizycznej',
    '158': 'związki sportowe',
    '159': 'polskie związki sportowe',
    '160': 'inne organizacje społeczne lub zawodowe',
    '161': 'kolumny transportu sanitarnego',
    '162': 'stowarzyszenia kultury fizycznej o zasięgu ogólnokrajowym',
    '163': 'zrzeszenia handlu i usług',
    '164': 'zrzeszenia transportu',
    '165': 'instytuty badawcze',
    '141': 'jednostki badawczo-rozwojowe',
    '166': 'ogólnokrajowe reprezentacje zrzeszeń handlu i usług',
    '167': 'ogólnokrajowe reprezentacje zrzeszeń transportu',
    '168': 'inne organizacje podmiotów gospodarczych',
    '169': 'izby gospodarcze',
    '171': 'przedsiębiorstwa zagraniczne',
    '172': 'związki zawodowe',
    '174': 'związki pracodawców',
    '175': 'federacje/konfederacje związków pracodawców',
    '177': 'kółka rolnicze',
    '178': 'rolnicze zrzeszenia branżowe',
    '179': 'oddziały zagranicznych przedsiębiorców',
    '180': 'spółdzielcze kasy oszczędnościowo-kredytowe',
    '181': 'stowarzyszenia ogrodowe',
    '182': 'związki stowarzyszeń ogrodowych',
    '183': 'jednostki terenowe stowarzyszeń posiadające osobowość prawną',
    '184': 'jednostki organizacyjne związków zawodowych posiadające osobowość prawną',
    '381': 'przedszkola publiczne',
    '382': 'przedszkola niepubliczne',
    '383': 'publiczne szkoły podstawowe',
    '384': 'publiczne gimnazja',
    '385': 'publiczne szkoły ponadpodstawowe',
    '386': 'publiczne szkoły ponadgimnazjalne',
    '387': 'publiczne szkoły artystyczne',
    '388': 'niepubliczne szkoły podstawowe',
    '389': 'niepubliczne gimnazja',
    '390': 'niepubliczne szkoły ponadpodstawowe',
    '391': 'niepubliczne szkoły ponadgimnazjalne',
    '392': 'niepubliczne szkoły artystyczne',
    '393': 'publiczne placówki systemu oświaty',
    '394': 'niepubliczne placówki systemu oświaty',
    '395': 'inne publiczne jednostki organizacyjne systemu oświaty',
    '396': 'inne niepubliczne jednostki organizacyjne systemu oświaty',
    '397': 'publiczne zespoły szkół i placówek systemu oświaty',
    '398': 'niepubliczne zespoły szkół i placówek systemu oświaty',
    '401': 'organy władzy, administracji rządowej',
    '402': 'organy kontroli państwowej i ochrony prawa',
    '403': 'wspólnoty samorządowe',
    '406': 'sądy i trybunały',
    '409': 'Skarb Państwa',
    '428': 'państwowe jednostki organizacyjne',
    '429': 'gminne samorządowe jednostki organizacyjne',
    '430': 'powiatowe samorządowe jednostki organizacyjne',
    '431': 'wojewódzkie samorządowe jednostki organizacyjne',
    '439': 'inne państwowe lub samorządowe osoby prawne w rozumieniu art. 9 pkt 14 ustawy z dnia 27 sierpnia 2009 r.'
           ' o finansach publicznych (Dz. U. z 2013 r. poz. 885, z późn. zm.3)',
    '999': 'bez szczególnej formy prawnej',
}


class Nip(BaseModel):
    nip: str

    @validator('nip')
    def name_must_contain_space(cls, value):
        if len(value) != 10:
            raise ValueError('Wrong nip format')
        return value








class User(BaseModel):
    is_active: bool
    first_name: str
    last_name: str
    city: str
    age: int

    class Config:
        orm_mode = True


class UserResponse(BaseModel):
    is_active: bool
    first_name: str
    last_name: str
    city: str
    age: int
    id: int

    class Config:
        orm_mode = True


class UserUpdate(BaseModel):
    __annotations__ = {k: Optional[v] for k, v in User.__annotations__.items()}
