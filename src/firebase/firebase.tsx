import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const fire = firebase.initializeApp({
  apiKey: 'AIzaSyDY2YUnd_kb3R8z82HA02qNMJ560VSoMbo',
  authDomain: 'stealth-7b7ac.firebaseapp.com',
  databaseURL: 'https://stealth-7b7ac-default-rtdb.firebaseio.com',
  projectId: 'stealth-7b7ac',
  storageBucket: 'stealth-7b7ac.appspot.com',
  messagingSenderId: '686949070558',
  appId: '1:686949070558:web:b1bac8a907c17be20e344f',
});
export const db = fire.firestore();
export default {
  fire,
};
