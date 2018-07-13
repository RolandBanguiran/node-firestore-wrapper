# Node Firestore Repository
A Firebase Firestore Repository Class for Node.JS.

## Sample Usage
```javascript
import { FirestoreRepository } from './FirebaseRepository';

// Create user repository object from instantiating FirestoreRepository class
const userRepository = new FireRepository();
userRepository.setCollection('users');

// Get all users
userRepository.get().then(users => {
  console.log(users);
});
```
Available Methods: *get(), getById(), add(), update(), delete()*

# Getting Started
Please follow below steps to setup this project in your local machine.

## 1. Clone
- Clone from Github repository

```bash
git clone https://github.com/RolandBanguiran/node-firestore-repository.git
```

## 2. Install
- Select project folder
- Install project dependencies

```bash
cd node-firestore-repository
npm install
```

## 3. Add your private key
- Add `serviceAccountKey.json` file to your project root folder
- Paste your generated private key configuration like below
```javascript
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

## 4. Build and Run
```bash
npm run-script start
```


# API Reference

### `setCollection(collectionName: string): void`
Set collection name.

**Parameters:**
- `collectionName` The collection name

### `get(conditions: Array<Condition> = null, orderBy: Array<OrderBy> = null, limit: number = null): Promise<Document[]>`
Get documents in a collection.

**Parameters:**
- `conditions` Array of conditions
- `orderBy` Field name to order by
- `limit` Number of documents to retrieve

**Return**
- Array of `Document` objects

### `getById(id: string): Promise<Document>`
Get a document by ID

**Parameters:**
- `id` The document ID

**Return**
- A `Document` object or `null`

### `add(data: Object, id: string = null): Promise<ResultData>`
Add a document.

**Parameters:**
- `data` A document object
- `id` The document ID

**Return:**
- `ResultData` object or `null`

### `update(data: Object, id: string, isMerge: boolean = false): Promise<ResultData>`
Update a document.

**Parameters:**
- `data` The document object
- `id` The document ID
- `isMerge` If true, data will merge into existing document. Default is false.

**Return:**
- `ResultData` object or `null`

### `delete(id: string): Promise<ResultData>`
Delete a document

**Parameters:**
- `id` The document ID

**Return:**
- `ResultData` object or `null`
