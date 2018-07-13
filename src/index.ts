import { FirestoreRepository, Document } from './FirebaseRepository';

/**
 * Instantiate FirestoreRepository class
 */
const userRepository = new FirestoreRepository();
userRepository.setCollection('users');

/**
 * Get all user
 */
userRepository.get().then(users => {
    console.log(users);
});