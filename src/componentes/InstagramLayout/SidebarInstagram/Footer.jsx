import React from "react";

const Footer = () =>{
    const _styesFooter = {
        footer:{
            color:'#c7c7c7',
            fontSize:'0.7em',
            marginTop:'2em'
        },
        links:{
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 0 2em 0',
            padding: '0',
            listStyle: 'none'
        },
        li: {
            margin: '0 0.25em 0 0.25em'
        }

    }

    return(
    <div style={_styesFooter.footer}>
      <ul style={_styesFooter.links}>
        <li style={_styesFooter.li}>Información</li>
        <li style={_styesFooter.li}>Ayuda</li>
        <li style={_styesFooter.li}>Prensa</li>
        <li style={_styesFooter.li}>API</li>
        <li style={_styesFooter.li}>Empleo</li>
        <li style={_styesFooter.li}>Privacidad</li>
        <li style={_styesFooter.li}>Condiciones</li>
        <li style={_styesFooter.li}>Ubicaciones</li>
        <li style={_styesFooter.li}>Cuentas destacadas</li>
        <li style={_styesFooter.li}>Hashtags</li>
        <li style={_styesFooter.li}>Idioma</li>
      </ul>
      <div>© 2021 INSTAGRAM FROM META</div>
    </div>

    );

}

export default Footer