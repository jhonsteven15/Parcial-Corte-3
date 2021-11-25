import React from 'react';
import {firebase} from '../../firebase/firebaseConfig';
import {AiFillGoogleCircle} from 'react-icons/ai';
import Insta from '../images/celus.png';
import Footer from "./Piedepag";


const SignIn = () =>{

    const SignInWithFirebase = () =>{
        var google_provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(google_provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const _stylesInicio ={    
        imag:{
        position:'relative',
        top:'0px',
        marginLeft:'20%',
        display:'flex',
    
        float:'left'
        },
    
        recuadro:{
            width:'345px',
            height: '370px',
            alignItems:' center',
            backgroundColor:'#fff',
            backgroundColor: 'rgba(var(--d87,255,255,255),1)',
            border: '1px solid #dbdbdb',
            border:'1px solid rgba(var(--b6a,219,219,219),1)',
            borderRadius:' 1px',
            padding:'10px 0',
            marginLeft:'51%',
            marginTop:'7%',
            position:'relative',
    
        },
    
        recuadro2:{
            width:'345px',
            height: '40px',
            alignItems:' center',
            backgroundColor:'#fff',
            backgroundColor: 'rgba(var(--d87,255,255,255),1)',
            border: '1px solid #dbdbdb',
            border:'1px solid rgba(var(--b6a,219,219,219),1)',
            borderRadius:' 1px',
            padding:'10px 0',
            marginLeft:'51%',
            marginTop:'1%',
            fontSize:'15px',
            textAlign:'center',
            position:'relative',
    
         },
    
         titulo:{
    
            display:'flex',
            marginLeft:'25%',
            marginTop:'8%',
            position:'relative',
            botton:'-220px',
            height: '51px',
            width: '175px', 
      
        },
    
        escritura:{
            margin:'8px',
            display:'flex',
            flexDirection: 'row',
            flex: '1 1 auto',
            flexBasis: 'auto',
            alignItems: 'center',
            boxSizing: 'boder-box',
            height:'35px',
            width:'75%',
            marginTop:'10%',
            marginLeft:'10%',
            fontSize:'13px',
            position:'relative',
            backgroundColor:'#fff',
            backgroundColor: 'rgba(var(--d87,255,255,255),1)',
            border: '1px solid #dbdbdb',
            border:'1px solid rgba(var(--b6a,219,219,219),1)',
            borderRadius:' 1px',
        },

        logo:{
            margin:'22px auto 12px',
            width:'175px',
            height:'51px',
            display:'flex'
        },
            
        escritura2:{
            margin:'8px',
            display:'flex',
            flexDirection: 'row',
            flex: '1 1 auto',
            flexBasis: 'auto',
            alignItems: 'center',
            boxSizing: 'boder-box',
            height:'35px',
            width:'75%',
            marginLeft:'10%',
            fontSize:'13px',
            paddingTop:'0',
            position:'relative',
            backgroundColor:'#fff',
            backgroundColor: 'rgba(var(--d87,255,255,255),1)',
            border: '1px solid #dbdbdb',
            border:'1px solid rgba(var(--b6a,219,219,219),1)',
            borderRadius:' 1px',
        },
    
        boton1:{
            display:'flex',
            marginLeft:'11%',
            height:'30px',
            width:'75%',
            justifyContent:'center',
            background:'#3498DB ',
            color:'white',
            borderRadius:'5px',
            border:'#3498DB ',
            cursor:'pointer',
            marginTop:'14px',
            fontSize:'15px',
            textAlign:'center',
            padding:'7px',
            position:'relative'
    
        },
    
        boton2:{
            display:'flex',
            marginLeft:'10%',
            height:'10%',
            width:'80%',
            justifyContent:'center',
            color:'#2874A6',
            borderRadius:'5px',
            border:'#3498DB ',
            cursor:'pointer',
            marginTop:'14px',
            fontSize:'15px',
            textAlign:'center',
            position:'relative'
        },
        btnsesion:{
            backgroundColor:'transparent',
            border:'none',
            display:'flex',
            alignItems:'center',
            color:'#2874A6',
            height:'60%',
            cursor:'pointer'

        },
    
        centro:{
            display:'flex',
            flexDirection: 'column',
            color: 'gray',
            position:'relative',
            fontSize:'17px',
            textAlign:'center',
         
        },
    
        icono:{
            display:'flex',
            height:'25px',
            width:'15%',
            color:'#2874A6',
            position:'relative'
        },
    
        ultimo:{
            fontSize:'12px',
            textAlign:'center',
            textDecoretion:'none',
            color:'grey',
            cursor:'pointer',
            position:'relative',
        
        },
        olvidar:{
            width:'100%',
            justifyContent:'center'
        },
        cuadro:{
            width:'100%',
            height:'100%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        },

        ultimo1:{
            display:'flex',
            height:'100%',
            textDecoration:'none',
            fontSize:'14px'
        },

        ultimo2:{
            display:'flex',
            height:'100%',
            fontSize:'14px',
            textAlign:'center',
            textDecoration:'none',
            color:'#3498DB ',
            cursor:'pointer',
        },
    
      
        };

        return(
            <div>
                
                    <img  style={ _stylesInicio.imag} src={Insta}/>
                
                <div style ={_stylesInicio.recuadro}>
                    <div>
                    <img alt="Instagram" style={_stylesInicio.logo} className="s4Iyt" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
                    </div>
                    <div>
                        <input style={ _stylesInicio.escritura} placeholder="Telefono, usuario o correo electronico" ></input>
                    </div>
                    <div>
                        <input style={ _stylesInicio.escritura2} placeholder="Contraseña" ></input>
                    </div>
                    <div>
                        <button style={ _stylesInicio.boton1}>Iniciar Sesion</button>
                    </div>
                    <div>
                        <h1 style={ _stylesInicio.centro} >O</h1>
                    </div>
                    <div style={ _stylesInicio.boton2}>                        
                        <button style={_stylesInicio.btnsesion} onClick={SignInWithFirebase}>Login with</button>
                        <AiFillGoogleCircle onClick={SignInWithFirebase} style={ _stylesInicio.icono}/>
                    </div>
                    <div style={_stylesInicio.olvidar}>
                        <h1 style={ _stylesInicio.ultimo}>¿olvidaste tu Contraseña?</h1>
                    </div>
                </div>
                <div style ={_stylesInicio.recuadro2}>
                
                <div style={_stylesInicio.cuadro}>
                    <a href="/" style={_stylesInicio.ultimo1}>¿No tienes una cuenta?</a> 
                    <a href="/" style={ _stylesInicio.ultimo2} >Registrate</a>
                </div>
                
                </div>

            <Footer/>
        
        </div>
           
        );
}
export default SignIn



