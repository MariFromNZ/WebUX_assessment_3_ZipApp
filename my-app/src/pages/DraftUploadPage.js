import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

import kea from '../images/kea.jpg';
import bookmarkIcon from '../images/bookmarkIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import editIcon from '../images/editIcon.svg';
import Card from 'react-bootstrap/Card';
import './DraftUploadPageStyle.css';
import profileIcon from '../images/pukeko.jpg';

function DraftUploadPage() {
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
            <h4>User name</h4>
          </div>
          <img  src={editIcon} alt="share" className='share icon'/> 
        </div>
        <div>
          <p>Found this guy while I was tramping, what a cool photo!</p>
          <hr></hr>
          <p>No comments yet</p>
          </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default DraftUploadPage