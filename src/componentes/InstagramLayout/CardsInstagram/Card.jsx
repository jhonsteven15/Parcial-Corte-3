import Profile from "../SidebarInstagram/Profile";
import { ReactComponent as CardButton} from "../../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

const Card = (props) =>{

    const _stylesLayoutCard = {
        card:{
            border: '1px solid $border-color-grey',
            backgroundColor: 'white',
            marginBottom: '3.5em',
            borderRadius: '3px'
        },
        header:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75em'
        },
        profile:{
            marginBottom: '0'
        },
        cardButton:{
            height:'30px'
        },
        cardImage:{
            width:'100%',
            display:'block',
        },
        likedBy:{
            display: 'flex',
            paddingLeft: '1em'
        },
        span:{
            fontSize: '0.75em',
            marginLeft: '0.5em',
            paddingTop: '0.5em'
        },
        comments:{
            marginBottom: '0.75em'
        },
        timeposted:{
            fontSize: '0.6em',
            paddingLeft: '2em',
            paddingBottom: '1em',
            color: '#8e8e8e',
            borderBottom: '1px solid #efefef'
        },
        addComment:{
            display:'flex',
            justifyContent: 'space-between',
            fontSize:'0.85em',
            padding: '1.5em 1.25em'
        },
        commentText:{
            color: '#8e8e8e'
        },
        postText:{
            color:'#b3dffc'
        },
        profileimage:{
            borderRadius:'100%'
        }

    }
    const {
        image,
        comments,
        likedByText,
        likedByNumber,
        hours,
      } = props;
      return (
        <div style={_stylesLayoutCard.card}>
          <header style={_stylesLayoutCard.header}>
            <Profile height="35px" width="35px" style={_stylesLayoutCard.profileimage} />
            <CardButton style={_stylesLayoutCard.cardButton} />
          </header>
          <img style={_stylesLayoutCard.cardImage} src={image} alt="card content" />
          <CardMenu />
          <div style={_stylesLayoutCard.likedBy}>
            <Profile height="25px" width="25px" style={_stylesLayoutCard.profileimage} hideAccountName={true} />
            <span style={_stylesLayoutCard.span}>
              Liked by <strong>{likedByText}</strong> and{" "}
              <strong>{likedByNumber} others</strong>
            </span>
          </div>
          <div style={_stylesLayoutCard.comments}>
            {comments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  accountName={comment.user}
                  comment={comment.text}
                />
              );
            })}
          </div>
          <div style={_stylesLayoutCard.timeposted}>{hours} HOURS AGO</div>
          <div style={_stylesLayoutCard.addComment}>
            <div style={_stylesLayoutCard.commentText}>Add a comment...</div>
            <div style={_stylesLayoutCard.postText}>Post</div>
          </div>
        </div>
      );
}
export default Card