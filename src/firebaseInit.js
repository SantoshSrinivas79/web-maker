import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
	initializeFirestore,
	persistentLocalCache,
	persistentMultipleTabManager
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
	apiKey: 'AIzaSyA0Qef7NitawUcQtwu5c5RaX2LnOjrUz4E',
	authDomain: 'web-maker-90a17.firebaseapp.com',
	databaseURL: 'https://web-maker-90a17-default-rtdb.firebaseio.com',
	projectId: 'web-maker-90a17',
	storageBucket: 'web-maker-90a17.appspot.com',
	messagingSenderId: '943923097882',
	appId: '1:943923097882:web:bc8aed5a274b8da7303ca3'
};

const app = initializeApp(config);
export { app };

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
	localCache: persistentLocalCache({
		tabManager: persistentMultipleTabManager()
	})
});
