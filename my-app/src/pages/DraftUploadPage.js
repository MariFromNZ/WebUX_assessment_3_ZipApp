import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

import kea from '../images/kea.jpg';
import bookmarkIcon from '../images/bookmarkIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import './ProfilePageStyle.css';
import Card from 'react-bootstrap/Card';
import './DraftUploadPageStyle.css';

function DraftUploadPage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='post_content'>

        <Card className='card-position'>
          <Card.Img variant="top" src={kea} alt="user avatar" />
          <Card.Body className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='card-info'>
                <Card.Title className='card-transparent-bg card-title-overlay'>Kea</Card.Title>
                <Card.Text>Aoraki/Mount Cook National Park, Aoraki 7999</Card.Text>
              </div>
              <div className='card_icons-big d-flex'>
                <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                <img  src={shareIcon} alt="share" className='share icon'/>
              </div>
            </div>

          </Card.Body>
        </Card>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default DraftUploadPage