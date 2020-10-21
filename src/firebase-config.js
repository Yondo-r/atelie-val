const Rebase = require('re-base')
const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyATp6U2b7tds5DDxcwLWocLHB-OdBLX8u4",
    authDomain: "val-atelie.firebaseapp.com",
    databaseURL: "https://val-atelie.firebaseio.com",
    projectId: "val-atelie",
    storageBucket: "val-atelie.appspot.com",
    messagingSenderId: "46377040687",
    appId: "1:46377040687:web:0de7b1a7c7bd0315a2ffda",
    measurementId: "G-YTP1YCSN8D"
  };

const settings = {timestampsInSnapshots: true};
const app =  firebase.initializeApp(firebaseConfig)
const config = Rebase.createClass(app.database())

export var crudApp = app;
export const storage = app.storage()
export const auth = app.auth()
export var tutorialsRef = firebase.database().ref()
export var db = firebase.firestore().settings(settings);

export default config;