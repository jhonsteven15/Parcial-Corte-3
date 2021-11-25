import React from "react";
import Profile from "../assets/profile.jpg"
import {firebase} from '../../firebase/firebaseConfig';

const ProfileIcon = (props) =>{
    const signOut = () =>{
        firebase.auth().signOut();
    }
    const { image } = props;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomId = getRandomInt(1, 70);

    let profileImage = image
        ? image
    : `https://i.pravatar.cc/150?img=${randomId}`;

    const _stylesIconProfile = {
        
        image:{
           borderRadius:'100%',
           backgroundSize:'cover',
        },
        fondo: {
            background: 'white',
            width: '66px',
            height: '66px',
            borderRadius: '100%',
            margin: 'auto',
            marginTop: '2px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        
    }


    return(

        <div>
            <img width={props.width} height={props.height} onClick={signOut} src={Profile} style={_stylesIconProfile.image} alt="" />
        </div>
    );
}

export default ProfileIcon