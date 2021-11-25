import React from "react";

const Comment = (props) =>{
  const { accountName, comment } = props;
    const _stylesComment = {
        commentContainer:{
            display:'flex',
            paddingLeft:'1.5em',
            fontsize:'0.75em',
            marginBottom:'0.4em'
        },
        accountName:{   
            fontWeight: '600'

        },
        comment:{
            marginLeft: '0.5em'
        }
  }

  return (
    <div style={_stylesComment.commentContainer}>
      <div style={_stylesComment.accountName}>{accountName}</div>
      <div style={_stylesComment.comment}>{comment}</div>
    </div>
  );
}

export default Comment;