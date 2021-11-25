import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Story from "../StoriesInstagram/Story"

const Stories = () =>{
    const _stylesStories = {
        stories:{
            display:'flex',
            alignContent: 'center',
            backgroundColor: 'white',
            border: '1px solid #eaeaea',
            borderRadius: '3px',
            margin: '2em 0 1.5em 0',
            height: '7.4em',
            overflow: 'hidden'
        }
    }
    return(
        <HorizontalScroll style={_stylesStories.stories} reverseScroll={true}>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </HorizontalScroll>
    )
}

export default Stories