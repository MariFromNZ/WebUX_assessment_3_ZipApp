// (Mariia) created add comment component 
//-------------------------------------------------------------------------------------------------------------//

import './AddCommentStyle.css';
import profileIcon from '../images/userPhoto.png';
import sendCommentIcon from '../images/sendCommentIcon.svg'

import React, { useState } from 'react';

function AddComment() {
  const [input, setInput] = useState("");
  const [comment, setComment] = useState([]); //to store inputs

  const addComment = () => {
    if (input.trim() !== "") {  // check input that is not empty
      setComment([...comment, input]);  // add new item to array
      setInput("");  // clear input after add item
    }
  };

    return (
      <div>
        <div className='comment_box d-flex justify-content-between align-items-center'>
          <div className='d-flex justify-content-start align-items-center'>
            <img  src={profileIcon} alt="user avatar" className='img-fluid rounded-circle'/>
            <input type="text" placeholder="Add a comment" value={input} onChange={(e) => setInput(e.target.value)}/>
          </div>
          <img  src={sendCommentIcon} alt="send comment icon"  onClick={addComment} /> 
        </div>

        <div className='comments'>

          {comment.map((comment, index) => (
            <p key={index}>{comment}</p>  // Display  comments
          ))}

        </div>
      </div>

    );
}

export default AddComment;