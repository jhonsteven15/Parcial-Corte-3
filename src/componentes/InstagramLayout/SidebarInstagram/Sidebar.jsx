import React from "react";
import Sticky from "react-sticky-el";
import Suggestion from "./Suggestion";
/*import image from "../assets/profile.jpg"*/
import Profile from "./Profile";
import Footer from "./Footer"


const Sidebar = () =>{
    const _styesSidebar = {
        sidebar:{
            width: '320px',
            padding: '7em 2em 0 2em'
        }
    }
    return(
            <Sticky topOffset={-80}>
                <div style={_styesSidebar.sidebar}>
                <Profile 
                    username="jhonstevenp"
                    caption="Js15"
                    urlText="Cambiar"
                />
                <Suggestion/>
                <Footer/>
                </div>
            </Sticky>
    
    );
}

export default Sidebar