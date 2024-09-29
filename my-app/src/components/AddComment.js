// (Mariia) created add comment component 
//-------------------------------------------------------------------------------------------------------------//
import './AddCommentStyle.css';
import profileIcon from '../images/userPhoto.png';
import sendCommentIcon from '../images/sendCommentIcon.svg'
import React from 'react';

function AddComment({ input, setInput, addComment }) {
    return (
      <div>
        <div className='comment_box d-flex justify-content-between align-items-center'>
          <div className='d-flex justify-content-start align-items-center'>
            <img  src={profileIcon} alt="user avatar" className='img-fluid rounded-circle'/>
            <input type="text" placeholder="Add a comment" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addComment()}/>
          </div>
          <img  src={sendCommentIcon} alt="send comment icon"  onClick={addComment} /> 
        </div>
      </div>
    );
}

export default AddComment;