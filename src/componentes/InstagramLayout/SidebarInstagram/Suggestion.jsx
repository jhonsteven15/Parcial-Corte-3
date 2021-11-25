import React from "react";
import Profile from "../SidebarInstagram/Profile"

const Suggestion = (props) =>{
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

    const _styesSuggestion = {
        suggestion:{
            marginTop: '1.25em',
        },
        titleContainer:{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.8em',
            fontWight: '500',
            color: '#8e8e8e',
            marginBottom: '1.25em'
        },
        title:{
            minWidth:'250px',
            
        },
        link:{
            width: '100%',
            color: 'black',
            textDecoration: 'none'
        },
        img:{
            borderRadius:'100%',
            width:'35px',
            height:'35px'
        }

    }

    return(
        <div style={_styesSuggestion.suggestion}>
            <div style={_styesSuggestion.titleContainer}>
            <div style={_styesSuggestion.title}>
                Sugerencias para ti
            </div>
            <a style={_styesSuggestion.link} href="/">Ver todo</a>
            </div>
        
        <Profile width="35px" height="35px"    
        caption="luisrlz y 3 más siguen esta cuenta"
        urlText="Seguir"
        style={_styesSuggestion.img}
        />

        <Profile
        width="35px" height="35px"
        caption="luisrlz y 3 más siguen esta cuenta"
        urlText="Seguir"
        />

        <Profile
        width="35px" height="35px"
        caption="luisrlz y 3 más siguen esta cuenta"
        urlText="Seguir"
        />
        <Profile
        width="35px" height="35px"
        caption="luisrlz y 3 más siguen esta cuenta"
        urlText="Seguir" 
        />

        <Profile
        width="35px" height="35px"
        caption="Seguired by mapvault + 4 more"
        urlText="Seguir"
        />

        </div>



    );

}

export default Suggestion