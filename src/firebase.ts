import firebaseApp from 'firebase/app';
import { auth } from 'firebase';
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

let app: firebaseApp.app.App;
if (process.env.NODE_ENV === 'development') {
    if (firebaseApp.apps.length) {
        app = firebaseApp.apps[0];
    } else {
        app = firebaseApp.initializeApp(firebaseConfig); 
    }
} else {
    app = firebaseApp.initializeApp(firebaseConfig);
}

// authentication
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