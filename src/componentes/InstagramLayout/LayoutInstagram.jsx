import React from "react";
import Sidebar from "../InstagramLayout/SidebarInstagram/Sidebar";
import Cards from "./CardsInstagram/Cards";

const Layout = () =>{
    const _stylesLayout = {
        container: {
          display: 'flex',
          justifyContent: 'left',
          margin:' 0 auto',
          maxWidth:'1000px'
        },
        main:{
          backgroundColor: '#fafafa',
          marginTop: '55px'
        }


    };
    return(
     <div style={_stylesLayout.main}>
         <div style={_stylesLayout.container}>
            <Cards/>
            <Sidebar/>
        </div>
     </div>
       
        
    );
}

export default Layout
