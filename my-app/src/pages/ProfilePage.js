// (Mariia) created profile page
//-------------------------------------------------------------------------------------------------------------//
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import profileIcon from '../images/userPhoto.png';
import pukeko from '../images/pukeko.jpg'
import weka from '../images/weka.jpg';
import spottedLizard from '../images/spottedLizard.jpg';
import greenLizard from '../images/greenLizard.jpg';
import kea from '../images/kea.jpg';
import furSeal from '../images/furSeal.jpg';
import shortTailedBat from '../images/shortTailedBat.jpg';
import bookmarkIcon from '../images/bookmarkIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import './ProfilePageStyle.css';
import Card from 'react-bootstrap/Card';


function ProfilePage() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className='title'>
          <h1>Profile</h1>
        </div>
        <div className='profile_content' id='bootsrtap-overrides'>
          <Container id='profile_content-pading'>
            <Row className='profile_content_details'>
              <Col xs={6} className='profile_content_details_avatar d-flex justify-content-center align-items-center'>
                <img  src={profileIcon} alt="user avatar" className='img-fluid rounded-circle'/>
              </Col>
              <Col xs={6} className='profile_content_details_name'>
               <h3>Olivia</h3>
               <div className='d-flex ' id='profile_content_details_location'>
                <FaLocationDot />
                <p>Ackland New Zealand</p>
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
                <Card className='card-position'>
                  <Card.Img variant="top" src={spottedLizard} alt="spotted lizard on the stone" />
                  <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='card-transparent-bg card-title-overlay'>Spotted lizard</Card.Title>
                    <div className='card_icons d-flex'>
                      <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                      <img  src={shareIcon} alt="share" className='share icon'/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={6}>
                <Card className='card-position'>
                  <Card.Img variant="top" src={weka} alt="bird weka"/>
                  <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='card-transparent-bg card-title-overlay'>Weka</Card.Title>
                    <div className='card_icons d-flex'>
                      <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                      <img  src={shareIcon} alt="share" className='share icon'/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={6}>
                <Card className='card-position'>
                  <Card.Img variant="top" src={kea} alt="user avatar" />
                  <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='card-transparent-bg card-title-overlay'>Kea</Card.Title>
                    <div className='card_icons d-flex'>
                      <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                      <img  src={shareIcon} alt="share" className='share icon'/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={6}>
                <Card className='card-position'>
                  <Card.Img variant="top" src={pukeko} alt="pukeko bird" />
                  <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='card-transparent-bg card-title-overlay'>Pukeko</Card.Title>
                    <div className='card_icons d-flex'>
                      <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                      <img  src={shareIcon} alt="share" className='share icon'/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
           </Row>

           <Row className='profile_content_saved row-margin-bottom'>
              <h4>My saved posts</h4>

              <Col xs={6}>
                <Card className='card-position'>
                  <Card.Img variant="top" src={furSeal} alt="fur seal"/>
                  <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='card-transparent-bg card-title-overlay'>Fue seal</Card.Title>
                    <div className='card_icons d-flex'>
                      <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                      <img  src={shareIcon} alt="share" className='share icon'/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={6}>
                <Card className='card-position'>
                  <Card.Img variant="top" src={shortTailedBat} alt="shorttailed bat" />
                  <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='card-transparent-bg card-title-overlay'>Shorttailed bat</Card.Title>
                    <div className='card_icons d-flex'>
                      <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                      <img  src={shareIcon} alt="share" className='share icon'/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={6}>
                <Card className='card-position'>
                  <Card.Img variant="top" src={pukeko} alt="pukeko bird" />
                  <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='card-transparent-bg card-title-overlay'>Pukeko</Card.Title>
                    <div className='card_icons d-flex'>
                      <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                      <img  src={shareIcon} alt="share" className='share icon'/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={6}>
                <Card className='card-position'>
                  <Card.Img variant="top" src={greenLizard} alt="green Lizard" />
                  <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='card-transparent-bg card-title-overlay'>Green lizard</Card.Title>
                    <div className='card_icons d-flex'>
                      <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                      <img  src={shareIcon} alt="share" className='share icon'/>
                    </div>
                  </Card.Body>
                </Card>
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