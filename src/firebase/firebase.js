import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration

const app = firebase.initializeApp({
    apiKey: "AIzaSyB6WOHqZc38TFacJpyyKb1C9L4-8YHezGU",
    authDomain: "idea-becerra-castro.firebaseapp.com",
    projectId: "idea-becerra-castro",
    storageBucket: "idea-becerra-castro.appspot.com",
    messagingSenderId: "244550203780",
    appId: "1:244550203780:web:281700078c3fbf7fb3c5d1"
})

export function getFirebase() {
    return app;

}

export function getFirestore() {
    return firebase.firestore(app);
}