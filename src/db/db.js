import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDMl2Uc8l2f1v2qxyG3oKSxiUJXJj-fasM",
  authDomain: "personal-website-bae0f.firebaseapp.com",
  databaseURL: "https://personal-website-bae0f.firebaseio.com",
  projectId: "personal-website-bae0f",
  storageBucket: "personal-website-bae0f.appspot.com",
  messagingSenderId: "141001180937"
};
firebase.initializeApp(config);
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
};

var db = firebase.firestore()

export { firebase, uiConfig, db }