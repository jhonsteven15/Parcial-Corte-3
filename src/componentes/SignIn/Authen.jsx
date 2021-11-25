import React from "react";
import '../App.css';
import { autentication } from "../Firebase/firebase";
import { signInWithPopup,GoogleAuthProvider} from 'firebase/auth';

const GoogleAutenticacion =()=>{
   
const firebaseSign =()=>{
    const googleProvider= new GoogleAuthProvider();
    signInWithPopup(autentication , googleProvider)
    .then((re)=>{
        console.log(re);
    })
    .catch((err)=>{
    })
     }
    return (
        <span className='INI'  onClick ={firebaseSign}>Iniciar sesion con Google</span>

    )
}
export default GoogleAutenticacion;