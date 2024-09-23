// Zach's login page

import React from 'react'
import zipLogoBig from "../images/zipLogoBig.svg"
import googleLogo from "../images/googleLogo.svg"
import appleLogo from "../images/appleLogo.svg"
import facebookLogo from "../images/facebookLogo.svg"
import './LoginStyle.css'


function LoginPage() {
  return (
    <div class="container">
      <img class="logo" src={zipLogoBig}></img>

      <h1>Log in</h1>

      <label for="username">Username</label>
      <input type="text" id="username" placeholder='John'></input>

      <label for="password">Password</label>
      <input type="text" id="password" placeholder='********'></input>

      <button>Log in</button>

      <a href="" class="forgot-pw">Forgot your password?</a>

      <h2>Or connect with</h2>

      <div class="social-media">
        <img src={googleLogo}></img>
        <img src={appleLogo}></img>
        <img src={facebookLogo}></img>
      </div>

      <div class="sign-up-link">
        <h2>Don't have an account?</h2>
        <a href="">Sign up</a>
      </div>
    </div>
  )
}

export default LoginPage