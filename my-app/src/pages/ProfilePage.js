import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import profileIcon from '../images/profileIcon.svg';
import { Container, Row, Col } from 'react-bootstrap';


function ProfilePage() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className='title'>
          <h1>Profile</h1>
        </div>
        <div className='profile_content'>
          <Container>
            <Row className='profile_content_details'>
              <Col xs={6} className='profile_content_details_avatar d-flex justify-content-center align-items-center'>
                <img  src={profileIcon} alt="user avatar"/>
              </Col>
              <Col xs={6} className='profile_content_details_name'>
               <h2>Name</h2>
                <p>location</p>
                <p>5 followers</p>
                <p>13 following</p>
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