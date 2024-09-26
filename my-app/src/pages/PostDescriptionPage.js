// (Mariia) created post page
//-------------------------------------------------------------------------------------------------------------//
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import kea from '../images/kea.jpg';
import bookmarkIcon from '../images/bookmarkIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import Card from 'react-bootstrap/Card';
import './PostDescriptionPageStyle.css';
import profileIcon from '../images/userPhoto.png';
import { MdModeEditOutline } from "react-icons/md";
import AddComment from '../components/AddComment';

import { useState } from 'react';

function PostDescriptionPage() {

    const [input, setInput] = useState(""); 
    const [comments, setComments] = useState([]); //to store inputs

    const addComment = () => {
      if (input.trim() !== "") { // check input that is not empty
          setComments([...comments, input]); // add new item to array
          setInput(""); // clear input after add item
      }
    };

  return (
    <div>
      <Navbar></Navbar>
      <div className='post_content'>
        <Card className='card-position'>
          <Card.Img variant="top" src={kea} alt="user avatar" />
          <Card.Body>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='card-info'>
                <Card.Title className='card-transparent-bg card-title-overlay'>Kea</Card.Title>
                <Card.Text>Aoraki/Mount Cook National Park, Aoraki 7999</Card.Text>
              </div>
              <div className='card_icons-big d-flex justify-content-end'>
                <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                <img  src={shareIcon} alt="share" className='share icon'/>
              </div>
            </div>
          </Card.Body>
        </Card>
        <div className='post_content_user-details d-flex justify-content-between align-items-center'>
          <div className='d-flex justify-content-start align-items-center'>
            <img  src={profileIcon} alt="user avatar" className='img-fluid rounded-circle'/>
            <h4>Olivia</h4>
          </div>
          <MdModeEditOutline className='icon-large'/>
        </div>
        <div>
          <p>Found this guy while I was tramping, what a cool photo!</p>
          <hr></hr>
          <div id='commentsBlock' >
            {comments.length > 0 ? (
               comments.map((comment, index) => (
               
                <div key={index} className='post_content_user-details d-flex justify-content-between align-items-center'>
                  <div className='d-flex justify-content-start align-items-center'>
                    <img src={profileIcon} alt="user avatar" className='img-fluid rounded-circle' />
                    <p>{comment}</p> {/* show comment */}
                  </div>
                  <MdModeEditOutline className='icon-large' />
                </div>
                ))
             ) : (
               <p>No comments yet</p> // initial messsage
              )}

          </div>
        </div>
      </div>
      <AddComment input={input} setInput={setInput} addComment={addComment}/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default PostDescriptionPage