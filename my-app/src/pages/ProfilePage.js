import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import profileIcon from '../images/pukeko.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";


function ProfilePage() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className='title'>
          <h1>Profile</h1>
        </div>
        <div className='profile_content' id='bootsrtap-overrides'>
          <Container>
            <Row className='profile_content_details'>
              <Col xs={6} className='profile_content_details_avatar d-flex justify-content-center align-items-center'>
                <img  src={profileIcon} alt="user avatar" className='img-fluid rounded-circle'/>
              </Col>
              <Col xs={6} className='profile_content_details_name'>
               <h2>Olivia</h2>
               <div className='d-flex align-items-center'>
                <FaLocationDot />
                <p >Ackland New Zealand</p>
               </div>

                <p>5 followers</p>
                <p>13 following</p>
             </Col>
           </Row>
           <Row className='profile_content_about row-margin-bottom'>
              <Col xs={12}>
                <h4>About me</h4>
                <p>I’m an outdoor enthusiast who loves exploring nature and snapping photos of wildlife. Hiking, birdwatching, and capturing the beauty of plants and animals is my passion. </p>
              </Col>
           </Row>

           <Row className='profile_content_recent row-margin-bottom'>
              <h4>My recent posts</h4>
              <Col xs={6}>
                <h6>post 1</h6>
              </Col>
              <Col xs={6}>
                <h6>post 2</h6>
              </Col>
              <Col xs={6}>
                <h6>post 3</h6>
              </Col>
              <Col xs={6}>
                <h6>post 4</h6>
              </Col>
           </Row>

           <Row className='profile_content_saved row-margin-bottom'>
              <h4>My saved posts</h4>
              <Col xs={6}>
                <h6>post 1</h6>
              </Col>
              <Col xs={6}>
                <h6>post 2</h6>
              </Col>
              <Col xs={6}>
                <h6>post 3</h6>
              </Col>
              <Col xs={6}>
                <h6>post 4</h6>
              </Col>
           </Row>
          </Container>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default ProfilePage