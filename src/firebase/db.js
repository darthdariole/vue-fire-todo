import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAYcW6gz6Fur6gb0XjQPQP972OafP8_KW4",
  
    authDomain: "vue-fire-todo-6e7c7.firebaseapp.com",
  
    databaseURL: "https://vue-fire-todo-6e7c7-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "vue-fire-todo-6e7c7",
  
    storageBucket: "vue-fire-todo-6e7c7.appspot.com",
  
    messagingSenderId: "303156404818",
  
    appId: "1:303156404818:web:6d4eab76ac103f92ccf58b"
  
};
export const db = firebase.initializeApp(firebaseConfig).firestore();