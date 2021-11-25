import React from "react";
import ButtonHeader from "./ButtonHeader";
import LogoHeader from "./LogoHeader";
import SearchBar from "./SearchHeader";



const Header = () =>{
    const _stylesHeader = {
        header:{
            position: 'fixed',
            top: '0',
            zIndex: '2',
            display: 'flex',
            height: '54px',
            width: '100%',
            borderBottom: '1px solid #f0f0f0',
            background: 'white'
        },
        caja1:{
            display: 'flex',
            textAlign: 'center',
            width: '42%',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'

        },

    }
    return(
 
    <header style={_stylesHeader.header}>
        
        <LogoHeader/>
        <SearchBar/>
        <ButtonHeader/>

     </header>
     
     
        
     
    );


}
export default Header;