// Zach's sign-up page

import React from 'react'
import zipLogoBig from "../images/zipLogoBig.svg"
import './SignUpPage.css'


function SignUpPage() {

  const submitForm = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    console.log(payload)
  }
  
  return (
    <form onSubmit={submitForm}>
      <img class="logo" src={zipLogoBig}></img>

      <h1>Sign up</h1>

      <div class="names">
        <div>
            <label for="first-name">First name</label>
            <input name="firstName" type="text" id="first-name" placeholder='John'></input>
        </div>

        <div>
            <label for="last-name">First name</label>
            <input name="lastName" type="text" id="last-name" placeholder='Doe'></input>
        </div>
      </div>

      <label for="email-address">Email</label>
      <input name="email" type="email" id="email-address" placeholder='JohnDoe@gmail.com'></input>

      <label for="password">Password</label>
      <input  name="password" type="password" id="password" placeholder='Password'></input>

      <label for="confirm-password">Confirm password</label>
      <input name="confirmPassword" type="password" id="confirmPassword" placeholder='Confirm password'></input>

      <button variant="primary" type="submit">Sign up</button>

      <a href="/login">Go back to login</a>
    </form>
  )
}

export default SignUpPage