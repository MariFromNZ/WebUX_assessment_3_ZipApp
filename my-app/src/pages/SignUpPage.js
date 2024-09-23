// Zach's sign-up page

import React from 'react'
import zipLogoBig from "../images/zipLogoBig.svg"
import './SignUpPage.css'


function SignUpPage() {
  return (
    <div class="container">
      <img class="logo" src={zipLogoBig}></img>

      <h1>Sign up</h1>

      <div class="names">
        <div>
            <label for="first-name">First name</label>
            <input type="text" id="first-name" placeholder='John'></input>
        </div>

        <div>
            <label for="last-name">First name</label>
            <input type="text" id="last-name" placeholder='Doe'></input>
        </div>
      </div>

      <label for="email-address">Email</label>
      <input type="email" id="email-address" placeholder='JohnDoe@gmail.com'></input>

      <label for="password">Password</label>
      <input type="text" id="password" placeholder='********'></input>

      <label for="confirm-password">Confirm password</label>
      <input type="text" id="confirm-password" placeholder='********'></input>

      <button>Sign up</button>

      <a href="/login">Go back to login</a>
    </div>
  )
}

export default SignUpPage