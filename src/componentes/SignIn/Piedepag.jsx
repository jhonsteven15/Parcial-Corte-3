import React from "react";

const Footer=()=>{
    const _styesFooter={
        footer:{
            color:'#c7c7c7',
            fontSize:'0.7em',
            marginTop:'20em',
            marginLeft:'25%',
            position:'fixed'
        },
        links:{
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 0 2em 0',
            padding: '0',
            listStyle: 'none',
            position:'fixed'
        },
        li: {
            margin: '0 0.25em 0 0.25em',
            position:'fixed'
        }
    }
        return(

            <div style={_styesFooter.footer}>
              <ul style={_styesFooter.links}>
                <li style={_styesFooter.li}>Meta</li>
                <li style={_styesFooter.li}>about</li>
                <li style={_styesFooter.li}>Blog</li>
                <li style={_styesFooter.li}>Jobs</li>
                <li style={_styesFooter.li}>Help</li>
                <li style={_styesFooter.li}>Api</li>
                <li style={_styesFooter.li}>Privacy</li>
                <li style={_styesFooter.li}>Terms</li>
                <li style={_styesFooter.li}>Top Accounts</li>
                <li style={_styesFooter.li}>Hashtags</li>
                <li style={_styesFooter.li}>Location</li>
                <li style={_styesFooter.li}>Instagram Lite</li>
               
              </ul>
              <div> <ul style={_styesFooter.links}>
                <li style={_styesFooter.li}>Beauty</li>
                <li style={_styesFooter.li}>Dance</li>
                <li style={_styesFooter.li}>Fitness</li>
                <li style={_styesFooter.li}>Food y Drink</li>
                <li style={_styesFooter.li}>Home y Garden</li>
                <li style={_styesFooter.li}>Music</li>
                <li style={_styesFooter.li}>Visual Arts</li>
               
              </ul>
              </div>
              <div>
              <ul style={_styesFooter.links}>
              <li style={_styesFooter.li}>English</li>
                <li style={_styesFooter.li}>© 2021 INSTAGRAM FROM META</li>
                </ul>
              </div>
            </div>
        
            );

    }
    export default Footer;