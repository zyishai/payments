import * as firebase from 'firebase/app';
import 'firebase/auth';
import { authState, user } from 'rxfire/auth';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

let app: firebase.app.App;

try {
    app = firebase.app(); // try to retrieve the default app.
} catch (err) {
    app = firebase.initializeApp(firebaseConfig);
}

// authentication
const auth = firebase.auth;
const authState$ = authState(auth());
const user$ = user(auth());
const signIn = () => auth().signInWithPopup(new auth.GoogleAuthProvider()).then(console.log).catch(console.error);
const signOut = () => auth().signOut();

export { 
    app,
    authState$,
    user$,
    signIn,
    signOut
};