import React from 'react';
import Navbar from '../components/Navbar';
import Card from 'react-bootstrap/Card';
import kea from '../images/kea.jpg';
import weka from '../images/weka.jpg';
import spottedLizard from '../images/spottedLizard.jpg';
import bookmarkIcon from '../images/bookmarkIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import Footer from '../components/footer';

function CommunityPage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='title'>
        <h1>All posts</h1>
      </div>
      <div className='posts'>
        <Card className='card-position'>
                <Card.Img variant="top" src={kea} alt="kea on stone" />
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
        <Card className='card-position'>
                <Card.Img variant="top" src={weka} alt="weka bird" />
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='card-info'>
                            <Card.Title className='card-transparent-bg card-title-overlay'>Weka</Card.Title>
                             <Card.Text>Tongariro National Park, Tongariro Alpine Crossing 6999</Card.Text>
                        </div>
                        <div className='card_icons-big d-flex justify-content-end'>
                            <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                            <img  src={shareIcon} alt="share" className='share icon'/>
                        </div>
                    </div>
                </Card.Body>
        </Card>
        <Card className='card-position'>
                <Card.Img variant="top" src={spottedLizard} alt="spotted lizard" />
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='card-info'>
                            <Card.Title className='card-transparent-bg card-title-overlay'>Spotted lizard</Card.Title>
                             <Card.Text>Mount Cook National Park, Aoraki 7999</Card.Text>
                        </div>
                        <div className='card_icons-big d-flex justify-content-end'>
                            <img  src={bookmarkIcon} alt="bookmark" className='bookmark icon'/>
                            <img  src={shareIcon} alt="share" className='share icon'/>
                        </div>
                    </div>
                </Card.Body>
        </Card>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default CommunityPage