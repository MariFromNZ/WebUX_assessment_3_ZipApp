/*(Gaston) creating home page*/
import React from 'react'
import './HomePageStyle.css';
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import hiwCamera from '../images/hiwCamera.svg'
import hiwPeople from '../images/hiwPeople.svg'
import hiwComment from '../images/hiwComment.svg'

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
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}

export default HomePage