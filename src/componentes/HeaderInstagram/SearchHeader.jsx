import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () =>{
    const _stylesSearchBar = {
        containersearch:{
            display: 'flex',
            textAlign: 'center',
            alignText: 'center',
            width: '14%',
            height:'54px',
            justifyContent: 'center',
            alignItems: 'center'

        },
        search:{
            width:'215px',
            height:'26px',
            display: 'flex',
            flexDirection: 'row',
            border: '1px solid #bfc0c3',
            backgroundColor: '#fafafa',
            paddingLeft:'12px',
            paddingRight:'12px',
            borderRadius:'5px'
        },
        input:{
            border:'none',
            position:'relative',
            boxSizing:'border-box',
            display:'flex',
            height: '100%',
            width:'100%',
            fontSize: '14px',
            outline: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            marginLeft: '4px'
        },
        iconsearch:{
            color: '#bfc0c3',
            height:'100%',
            fontSize: '12px'
        },
        x:{
            display: 'flex',
            flexDirection: 'row',
            width: '10px',
            margin: '0px 6px 0px 0px',
        },
        y:{
            display: 'flex',
            width: '10%',
            position: 'absolute',
            left:'19px',
            top: '3px',
            color: '#bfc0c3',
            fontSize:'14px'
        },
        z:{
            display:'flex',
            position: 'relative'
        }

    }
    return(
        <div style={_stylesSearchBar.containersearch}>
            <div style={_stylesSearchBar.search}>
                <div style={_stylesSearchBar.z} >
                    <div style={_stylesSearchBar.x}>
                    <FontAwesomeIcon icon={faSearch} style={_stylesSearchBar.iconsearch}/>
                    </div>
                    <input type="text"  style={_stylesSearchBar.input}></input>
                    <div style={_stylesSearchBar.y}>
                        <span>Buscar</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SearchBar
