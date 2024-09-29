// (Gaston) camera page
import React from 'react'
import CameraAccess from '../components/CameraAccess'
import './CameraPageStyle.css'
import {FaBars, FaTimes} from "react-icons/fa";
import cameraCircle from '../images/cameraCircle.svg'
import addPhotoIcon from '../images/addPhotoIcon.svg'

function CameraPage() {
  return (
    <div className='camera-page-background'>
        <div className='camera-access'>
            <CameraAccess></CameraAccess>
        </div>
        <div className='exit-btn'>
        <a href='profile'><FaTimes></FaTimes> </a>
        </div>
        <div className='camera-circle'>
            <a href='/edit-post'> <img src={cameraCircle}/> </a>
        </div>
        <div className='add-photo'>
            <img src={addPhotoIcon}/>    
        </div>
    </div>

  )
}

export default CameraPage