import React from "react";
import Newpost from "./IconosHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons"; // Iconos tipo comentarios, corazones
import ProfileIcon from "./ProfileIcon";

const ButtonHeader = () =>{
    const _stylesButton = {

        containericon:{
            display: 'flex',textAlign: 'center',
            width: '360px',
            height:'100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding:'0px 0px 0px 24px'
        },

        message:{
            color:'black',
            fontSize: '23px',
            margin: '0px 0px 0px 22px'
        },
        icon:{
            height:'100%',
            margin: '0px 0px 0px 22px',
        },
        small:{
            margin: '0px 0px 0px 22px',
        },

    }

    return(

        <div style={_stylesButton.containericon}>
            <div><img src="https://img.icons8.com/fluency-systems-filled/25/000000/home.png" style={_stylesButton.icon}/></div>
            <div><img src="https://img.icons8.com/windows/34/000000/facebook-messenger--v5.png" style={_stylesButton.icon}/></div>
            <div><Newpost style={_stylesButton.icon}/></div>
            <div><img src="https://img.icons8.com/material-outlined/28/000000/compass.png" style={_stylesButton.icon}/></div>
            <div><FontAwesomeIcon icon={faHeart} style={_stylesButton.message}/></div>
            <div style={_stylesButton.small}><ProfileIcon width="25px" height="25px"/></div>
        </div>
       
    );
}

export default ButtonHeader