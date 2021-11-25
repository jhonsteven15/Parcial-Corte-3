import React from "react";
import users from "../../data/users";


const Story = (props) =>{
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

    let accountName = users[Math.floor(Math.random()* users.length)].username;

    if(accountName.length > 10){
        accountName = accountName.substring(0, 10) + "...";
    }
    const _stylesStory = {
        story:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '1em 0.5em',
            marginLeft: '1em',
            marginRight: '1em'
        },
        accountName:{
            fontSize:'0.65em',
            margin:'0.4em',
            display: 'flex',
            justifyContent:'center'
        },
        medium:{
            marginTop:'2px',  
            marginLeft:'1px',
            borderRadius: '100%',
            width:'64px',
            height:'65px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        colorStories:{
            background: 'linear-gradient(200deg, #da3394 25%, #e03c67 50%, #f3753b 75%, #f99b4a 100%)',
            width: '70px',
            height: '70px',
            borderRadius: '100%',
            

        },
        marco: {
            background: 'white',
            borderRadius: '100%',
            margin:'auto',
            marginTop: '2px',
            width:'66px',
            height:'66px',
            
        },
        
    }
    return(
        <div style={_stylesStory.story}>
            <div style={_stylesStory.colorStories}>
                <div style={_stylesStory.marco}>
                    <img src={profileImage} style={_stylesStory.medium} alt="" />
                    <span style={_stylesStory.accountName}>{accountName}</span>
                </div>
            </div>
        </div>
    )
}

export default Story
