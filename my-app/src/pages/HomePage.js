/*(Gaston) creating home page*/
import React from 'react'
import './HomePageStyle.css';
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import hiwCamera from '../images/hiwCamera.svg'
import hiwPeople from '../images/hiwPeople.svg'
import hiwComment from '../images/hiwComment.svg'

/*Mariia added posts(cards)*/
import Card from 'react-bootstrap/Card';
import kea from '../images/kea.jpg';
import weka from '../images/weka.jpg';
import spottedLizard from '../images/spottedLizard.jpg';
import bookmarkIcon from '../images/bookmarkIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function HomePage() {
  return (
    <div>
        <Navbar></Navbar>
        <div className='top-image-section'>
            <h1>Haere mai to Zip App</h1>
            <h3>Discover, share, learn, and connect with others who care about the beauty of Te Taiao Aotearoa.</h3>
            <div className='copyright-text'>
                <h6>Eli Prater</h6>
            </div>
        </div>
        <div className='hiw-section'>
            <h1>How it works</h1>
            <div className='hiw-icons'>
                <img src={hiwCamera}/>
                <img src={hiwPeople}/>
                <img src={hiwComment}/>
            </div>
            <div className='hiw-numbering'>
                <div className='' id='hiw-number'>
                    <h1>1</h1>
                </div>
                <hr></hr>
                <div className='' id='hiw-number'>
                    <h1>2</h1>
                </div>
                <hr></hr>
                <div className='' id='hiw-number'>
                    <h1>3</h1>
                </div>
            </div>
            <div className='hiw-p'>
                    <div className='' id='hiw-txt'>
                        <p>Capture your finding</p>
                    </div>
                    <div className='' id='hiw-txt'>
                        <p>Share with the Community</p>
                    </div>
                    <div className='' id='hiw-txt'>
                        <p>Discuss your findings</p>
                    </div>
                </div>
        </div>
        <div className='posts'>
            <Card className='card-position'>
                <Card.Img variant="top" src={kea} alt="kea on stone" />
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                        <a href='post-description' className='card_link'>
                            <div className='card-info'>
                            <Card.Title className='card-transparent-bg card-title-overlay'>Kea</Card.Title>
                             <Card.Text>Aoraki/Mount Cook National Park, Aoraki 7999</Card.Text>
                            </div>
                        </a>
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

export default HomePage