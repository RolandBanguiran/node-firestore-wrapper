# Node Firestore Repository
A Firebase Firestore Repository Class for Node.JS.

## Sample Usage
```javascript
import { FirestoreRepository } from './FirebaseRepository';

// Create user repository object from instantiating FirestoreRepository class
const userRepository = new FirestoreRepository();
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

**Returns:**
- Array of `Document` objects

**Sample Code:**
```javascript
// Get all users
userRepository.get().then(users => {
    console.log("All users:", users);
});

// Get all male users
const condition: Condition = {
    field: 'gender',
    operator: Operators.Equal,
    value: 'male'
};

userRepository.get([condition]).then(users => {
    console.log("All male users:", users);
});

// Get first male user order by name (need to create an index)
const condition2: Condition = {
    field: 'gender',
    operator: Operators.Equal,
    value: 'male'
};

const orderBy: OrderBy = {
    field: 'name',
    sort: SortType.Ascending
};

userRepository.get([condition2], [orderBy], 1).then(user => {
    console.log("First male user:", user);
});
```

### `getById(id: string): Promise<Document>`
Get a document by ID

**Parameters:**
- `id` The document ID

**Returns:**
- A `Document` object or `null`

**Sample Code:**
```javascript
userRepository.get('helloworld123').then(user => {
    console.log("User:", user);
});
```

### `add(data: Object, id: string = null): Promise<ResultData>`
Add a document.

**Parameters:**
- `data` A document object
- `id` The document ID

**Returns:**
- `ResultData` object or `null`

**Sample Code:**
```javascript
// Add a user with auto-generated ID
const user: Object = {
    name: 'Kat',
    email: 'kat@email.com',
    gender: 'female'
};

userRepository.add(user).then(result => {
    console.log("Add Result (auto-generated ID):", result);
});

// Add a user with custom ID
const user2: Object = {
    name: 'Gary',
    email: 'gary@email.com',
    gender: 'male'
};

userRepository.add(user2, 'helloworld123').then(result => {
    console.log("Add Result (custom ID):", result);
});
```

### `update(data: Object, id: string, isMerge: boolean = false): Promise<ResultData>`
Update a document.

**Parameters:**
- `data` The document object
- `id` The document ID
- `isMerge` If true, data will merge into existing document. Default is false.

**Returns:**
- `ResultData` object or `null`

**Sample Code:**
```javascript
// Update a user
const user3: Object = {
    name: 'Peter',
    email: 'peter@email.com',
    gender: 'male'
};

userRepository.update(user3, 'helloworld123').then(result => {
    console.log("Updated Result:", result);
});

// Update user email only
const user4: Object = {
    email: 'peter_updated@email.com'
};

userRepository.update(user4, 'helloworld123', true).then(result => {
    console.log("Updated Result:", result);
});
```

### `delete(id: string): Promise<ResultData>`
Delete a document

**Parameters:**
- `id` The document ID

**Returns:**
- `ResultData` object or `null`

**Sample Code:**
```javascript
// Delete a user by ID
userRepository.delete('helloworld123').then(result => {
    console.log("Delete Result:", result);
});
```
