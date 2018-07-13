import { FirestoreRepository, Condition, Operators, OrderBy, SortType } from './FirebaseRepository';


// Instantiate FirestoreRepository class
const userRepository = new FirestoreRepository();
userRepository.setCollection('users');


// 1. Get all users
userRepository.get().then(users => {
    console.log("All users:", users);
});

// 2. Get all male users
// const condition: Condition = {
//     field: 'gender',
//     operator: Operators.Equal,
//     value: 'male'
// };

// userRepository.get([condition]).then(users => {
//     console.log("All male users:", users);
// });

// 3. Get first male user order by name (need to create an index)
// const condition2: Condition = {
//     field: 'gender',
//     operator: Operators.Equal,
//     value: 'male'
// };

// const orderBy: OrderBy = {
//     field: 'name',
//     sort: SortType.Ascending
// };

// userRepository.get([condition2], [orderBy], 1).then(user => {
//     console.log("First male user:", user);
// });

// 4. Add a user with auto-generated ID
// const user: Object = {
//     name: 'Kat',
//     email: 'kat@email.com',
//     gender: 'female'
// };

// userRepository.add(user).then(result => {
//     console.log("Add Result (auto-generated ID):", result);
// });

// 5. Add a user with custom ID
// const user2: Object = {
//     name: 'Gary',
//     email: 'gary@email.com',
//     gender: 'male'
// };

// userRepository.add(user2, 'helloworld123').then(result => {
//     console.log("Add Result (custom ID):", result);
// });

// 6. Update a user
// const user3: Object = {
//     name: 'Peter',
//     email: 'peter@email.com',
//     gender: 'male'
// };

// userRepository.update(user3, 'helloworld123').then(result => {
//     console.log("Updated Result:", result);
// });

// 7. Update user email only
// const user4: Object = {
//     email: 'peter_updated@email.com'
// };

// userRepository.update(user4, 'helloworld123', true).then(result => {
//     console.log("Updated Result:", result);
// });

// 8. Delete a user by ID
// userRepository.delete('helloworld123').then(result => {
//     console.log("Delete Result:", result);
// });
