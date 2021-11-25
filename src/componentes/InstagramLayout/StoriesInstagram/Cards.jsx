import React from "react";
import Stories from "../StoriesInstagram/Stories"

const Card = () =>{
    const _stylesCards = {
        cards:{
            width: '600px'
        }
    }
    return(
        <div style={_stylesCards.cards}>
            <Stories/>
        </div>
    )
}

export default Card