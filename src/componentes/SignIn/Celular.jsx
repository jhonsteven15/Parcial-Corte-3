import React from "react";
import GoogleAutenticacion from './authen';
import {AiFillGoogleCircle} from 'react-icons/ai';
import  logo from '../imagenes/nombre.png';

const InicioCelular =()=>{
    
    const stiloInicio ={    
     titulo:{
        
        display:'flex',
        marginLeft:'25%',
        position:'relative',
        botton:'-220px',
        height: '51px',
        width: '175px', 
        marginTop:'8%',
      
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
        width:'73%',
        marginTop:'10%',
        marginLeft:'11%',
        fontSize:'13px',
        position:'adsolute',
        backgroundColor:'#fff',
        backgroundColor: 'rgba(var(--d87,255,255,255),1)',
        border: '1px solid #dbdbdb',
        border:'1px solid rgba(var(--b6a,219,219,219),1)',
        borderRadius:' 1px',
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
        width:'73%',
        marginLeft:'11%',
        fontSize:'13px',
        paddingTop:'0',
        position:'adsolute',
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
        position:'adsolute'
    

    },

    boton2:{
        display:'flex',
        marginLeft:'10%',
        height:'10%',
        width:'66%',
        justifyContent:'center',
        color:'#2874A6',
        borderRadius:'5px',
        border:'#3498DB ',
        cursor:'pointer',
        marginTop:'28px',
        fontSize:'15px',
        textAlign:'center',
        position:'adsolute',
     
    },

    centro:{
        display:'flex',
        flexDirection: 'column',
        color: 'gray',
        position:'relative',
        fontSize:'17px',
        textAlign:'center',
        position:'adsolute',
        marginTop:'20px'
    },

    icono:{
        display:'flex',
        height:'25px',
        width:'15%',
        color:'#2874A6',
        position:'adsolute'
    },

    ultimo:{
        fontSize:'12px',
        textAlign:'center',
        textDecoretion:'none',
        color:'grey',
        cursor:'pointer',
        position:'adsolute',
        marginTop:'4%'
       


    },
    ultimo2:{
        fontSize:'15px',
        textAlign:'center',
        textDecoretion:'none',
        color:'#3498DB ',
        cursor:'pointer',
        position:'adsolute',
        marginTop:'15%',
  
    },
    ultimo3:{

        fontSize:'15px',
        textAlign:'center',
        color:'black ',
        cursor:'pointer',
        position:'adsolute',
        marginTop:'15%',
  
    }
    };
    
    return(
        <div>
            <div>
                <div>
                <img  style={ stiloInicio.titulo} src={logo}/>
                </div>
                <div>
                    <input style={ stiloInicio.escritura} placeholder="Telefono, usuario o correo electronico" ></input>
                </div>
                <div>
                    <input style={ stiloInicio.escritura2} placeholder="Contraseña" ></input>
                </div>
                <div>
                    <button style={ stiloInicio.boton1}>Iniciar Sesion</button>
                </div>
                <div>
                    <h1 style={ stiloInicio.centro} >O</h1>
                </div>
                <div style={ stiloInicio.boton2}>
                    <AiFillGoogleCircle style={ stiloInicio.icono}/>
                     <GoogleAutenticacion/>
                </div>
                <div>
                    <h1 style={ stiloInicio.ultimo}>¿olvidaste tu Contraseña?</h1>
                </div>
            </div>
            <div >
                <div style={ stiloInicio.ultimo3}>¿No tienes una cuenta? 
                    <a style={ stiloInicio.ultimo2} >Registrate</a>
                </div>
            </div>
        
    </div>
       
    );
};
export default InicioCelular;