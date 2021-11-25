import React from "react";
import ProfileIcon from "../../HeaderInstagram/ProfileIcon";
import users from "../../data/users";
import img from "../../assets/profile.jpg"

const Profile = (props) =>{
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

    const {
        username,
        caption,
        urlText,
        hideAccountName,
        images,
        
      } = props;

      let accountName = username
      ? username
      : users[Math.floor(Math.random() * users.length)].username;

    const _stylesSearchBar = {
        profile:{
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.85em'
        },
        textContainer:{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '1em',
            minWidth: '180px'
        },
        accountName:{
            fontWeight: '500',
            marginBottom:'5px'
        },
        
        caption:{
            color: '#8e8e8e',
            fontSize: '0.8em'
        },
        links:{
            textDecoration: 'none'
        },
        image:{
            borderRadius:'100%',
            backgroundSize:'cover',
            
         },

    }
    return(
    <div style={_stylesSearchBar.profile}>
    <img width={props.width} height={props.height} src={profileImage} style={_stylesSearchBar.image} alt=""></img>
      {(accountName || caption) && !hideAccountName && (
        <div style={_stylesSearchBar.textContainer}>
          <span style={_stylesSearchBar.accountName}>{accountName}</span>
          <span style={_stylesSearchBar.caption}>{caption}</span>
        </div>
      )}
      <a style={_stylesSearchBar.links} href="/">{urlText}</a>
    </div>
    );
}

export default Profile