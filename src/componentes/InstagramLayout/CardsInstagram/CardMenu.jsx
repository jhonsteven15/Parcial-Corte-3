import { ReactComponent as Inbox } from "../../images/inbox.svg"
import { ReactComponent as Comments } from "../../images/comments.svg"
import { ReactComponent as Notifications } from "../../images/notifications.svg"
import { ReactComponent as Bookmark } from "../../images/bookmark.svg"

const CardMenu = () =>{
    const _stylesCardmenu = {
        cardMenu:{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '1em 0'
        },
        interactions:{
            display:'flex',
            paddingLeft:'1em'
        },
        icon:{
            marginRight:'1em',
            width:'23px',
            height:'23px'

        }

    }
    return (
        <div style={_stylesCardmenu.cardMenu}>
        <div style={_stylesCardmenu.interactions}>
            <Notifications style={_stylesCardmenu.icon} />
            <Comments style={_stylesCardmenu.icon} />
            <Inbox style={_stylesCardmenu.icon} />
        </div>
        <Bookmark style={_stylesCardmenu.icon}/>
        </div>
    );
}

export default CardMenu;