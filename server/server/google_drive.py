import os
import io
from googleapiclient.discovery import build
from google.oauth2 import service_account
from googleapiclient.http import MediaIoBaseDownload, MediaFileUpload
from dotenv import load_dotenv

load_dotenv()
# Google Drive Settings
SCOPES = ['https://www.googleapis.com/auth/drive']
PARENT_FOLDER_ID = "11NFodohETh5yfCqIlwr9BUsQcwMPssux"  # Update with your folder ID


def authenticate():
    """Authenticate with Google Drive using service account credentials."""
    service_account_info = {
        "type": os.getenv("GDRIVE_TYPE"),
        "project_id": os.getenv("GDRIVE_PROJECT_ID"),
        "private_key_id": os.getenv("GDRIVE_PRIVATE_KEY_ID"),
        "private_key": os.getenv("GDRIVE_PRIVATE_KEY").replace('\\n', '\n'),
        "client_email": os.getenv("GDRIVE_CLIENT_EMAIL"),
        "client_id": os.getenv("GDRIVE_CLIENT_ID"),
        "auth_uri": os.getenv("GDRIVE_AUTH_URI"),
        "token_uri": os.getenv("GDRIVE_TOKEN_URI"),
        "auth_provider_x509_cert_url": os.getenv("GDRIVE_AUTH_PROVIDER_X509_CERT_URL"),
        "client_x509_cert_url": os.getenv("GDRIVE_CLIENT_X509_CERT_URL"),
    }
    return service_account.Credentials.from_service_account_info(service_account_info, scopes=SCOPES)


def upload_to_drive(file_path, file_name):
    """Upload a file to Google Drive and return the file ID."""
    creds = authenticate()
    service = build('drive', 'v3', credentials=creds)

    file_metadata = {
        'name': file_name,
        'parents': [PARENT_FOLDER_ID],
    }
    media = MediaFileUpload(file_path, mimetype='image/jpeg')  # Adjust mimetype as needed
    file = service.files().create(body=file_metadata, media_body=media).execute()
    return file.get('id')

def download_from_drive(file_id):
    """Download a file from Google Drive and return its content, metadata, and public URL."""
    creds = authenticate()
    service = build('drive', 'v3', credentials=creds)

    # Get file metadata
    file_metadata = service.files().get(fileId=file_id, fields='name, mimeType').execute()

    # Set file permission to public
    try:
        permission = {
            'type': 'anyone',
            'role': 'reader',
        }
        service.permissions().create(fileId=file_id, body=permission).execute()
    except Exception as e:
        print(f"Failed to set public permissions: {e}")

    # Generate public URL
    public_url = f"https://drive.google.com/uc?id={file_id}&export=view"
    print(public_url)

    return public_url, file_metadata



if __name__ == '__main__':
    # Usage example
    download_from_drive('17dtAv2nN4mtiPttXSrLRndfZjYDRnQ5X')