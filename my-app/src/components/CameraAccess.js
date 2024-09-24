// (Gaston) camera access overlay
import React, { useState } from 'react';
import './CameraAccessStyle.css';

function CameraAccess() {
  const [isPopupVisible, setPopupVisible] = useState(true);

  return (
    <div>
      {isPopupVisible && (
        <div className='pop-up'>
          <h1>Zip app needs access to the Camera and Gallery</h1>
          <h2>To take pictures and upload photos from your device</h2>
          <div className='btn'>
            <a href='profile'>
              <button className='btn-n'>Don't allow</button></a>
            <button
              className='btn-y'
              onClick={() => setPopupVisible(false)}
            >
              Give access
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CameraAccess;

