# Node Firestore Repository
A Firebase Firestore Repository Class for Node.JS.

```js
// Instantiate FirestoreRepository class
const userRepository = new FireRepository();
userRepository.setCollection('users');

// Get all documents
userRepository.get().then(users => {
  console.log(users);
});
```
Available Methods: *get(), getById(), add(), update(), delete()*

# Getting Started
Please follow below steps to setup this project in your local machine.

## Clone
- Clone from Github repository

`get clone https://github.com/RolandBanguiran/node-firestore-repository.git`

## Install
- Select project folder
- Install project dependencies

```
cd node-firestore-repository
npm install
```

## Add your private key
- Add `serviceAccountKey.json` file to your project root folder
- Paste your generated private key configuration like below
```js
{
    "type": "service_account",
    "project_id": "node-firestore-repository",
    "private_key_id": "",
    "private_key": "",
    "client_email": "firebase-adminsdk-m693l@node-firestore-repository.iam.gserviceaccount.com",
    "client_id": "",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-m693l%40node-firestore-repository.iam.gserviceaccount.com"
}
```

## Build and Run
`npm run-script start`