import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {userAuthState} from 'react-firebase-hooks/auth';
import {useCollactionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyC4fQ3BwVlwNV4zGrN67vxthn9iuQu-XGY",
  authDomain: "chat-app-2a8b5.firebaseapp.com",
  projectId: "chat-app-2a8b5",
  storageBucket: "chat-app-2a8b5.appspot.com",
  messagingSenderId: "851593491460",
  appId: "1:851593491460:web:16faaac66154b16d4d3151",
  measurementId: "G-4C24X90QVF"

})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <section>
        {user? <Chatroom/> : <SignIn/>}
        </section>
      
    </div>
  );
}

export default App;
