// (Gaston) edit posts page
import React from 'react'
import '../pages/EditPostPageStyle.css'
import addPhotoIcon from "../images/addPhotoIcon.svg"

function EditPostPage() {
  return (
    <div className='edit-post-container'>
      <div className='title'>
          <h1>Edit Post</h1>
      </div>
      <div className='post-photo'>
        <a href='#'> <img className='add-photo-icon' src={addPhotoIcon} alt='add new photo'></img> </a>
      </div>
      <div className='post-species'>
        <label htmlFor="species">Name of species</label>
        <input type="text" id="species" placeholder='Fantail'></input>
      </div>
      <div className='post-description'>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" placeholder='Found the guy while...'></input>
      </div>
      <div className='post-location'>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder='Location'></input>
      </div>
      <div className='post-btn'>
        <a href=''><button className='btn-discard'>Discard</button></a>
        <a href='profile'><button className='btn-post'>Post</button></a>
      </div>
    </div>
  )
}

export default EditPostPage