import React from "react";


const LogoHeader = () =>{

    const _stylesHeader = {
        caja1:{
            display: 'flex',
            textAlign: 'center',
            width: '42%',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            color: 'red'

        },

        logo:{
            
            color: 'red'
        }

    }
    return(
        <div style={_stylesHeader.caja1}>
            <img alt="Instagram" style={_stylesHeader.logo} className="s4Iyt" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
         </div>
    );

}
export default LogoHeader;
