import React, {useState} from 'react';
import './App.css';
import Home from './componentes/Home';
import SignIn from './componentes/SignIn/SignIn';
import {firebase} from './firebase/firebaseConfig';

function App() {
  const [isUserSignedIn,setIsUserSignedIn] = useState(true);
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      return setIsUserSignedIn(true);
    }

    setIsUserSignedIn(false);
  })
  if(isUserSignedIn === true){
    return(

     <Home/>
     

    );
  }else{
    return(
      
      <SignIn/>

    )
  }
}

  



export default App;
