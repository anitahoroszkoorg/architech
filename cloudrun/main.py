import base64
import json
import os
import tempfile
from uuid import uuid4

import weasyprint
from flask import Flask
from flask import request
from jinja2 import Environment, FileSystemLoader
from google.cloud import storage
from flask import send_file, current_app as app


app = Flask(__name__)
CORS(app)


class CloudStorageClient:
    def __init__(self, storage_client):
        self.storage_client: storage.Client = storage_client

    def upload_from_file(self, bucket_name, target_file_name, file_path):
        bucket = self.storage_client.get_bucket(bucket_name)
        blob = bucket.blob(target_file_name)
        blob.upload_from_filename(file_path)

    def download_to_file(self, dest_path, uri):
        with open(dest_path, 'wb') as file_obj:
            self.storage_client.download_blob_to_file(
                uri,
                file_obj,
            )
        return dest_path


def get_data_from_request(request):
    envelope = request.get_json()
    pubsub_message = envelope["message"]
    return json.loads(base64.b64decode(pubsub_message["data"]).decode("utf-8"))[0]


@app.route('/', methods=['POST'])
def index():
    data = request.get_json()
    print(data)
    sc = CloudStorageClient(storage.Client())
    temp_dir = tempfile.gettempdir()
    filename = str(uuid4())
    template_file_name = f'{filename}_html.html'
    sc.download_to_file(
        dest_path=f'{template_file_name}',
        uri='gs://architech-static/umowa.html'
    )
    env = Environment(loader=FileSystemLoader(temp_dir))

    pdf_path = f'{temp_dir}/{filename}.pdf'

    template = env.get_template(template_file_name)
    html_out = template.render({**data})

    weasyprint.HTML(string=html_out, encoding='utf-8').write_pdf(pdf_path)
    return send_file(pdf_path, attachment_filename='file.pdf')



if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
