// Zach's login page

import React, { useState } from 'react'
import zipLogoBig from "../images/zipLogoBig.svg"
import googleLogo from "../images/googleLogo.svg"
import appleLogo from "../images/appleLogo.svg"
import facebookLogo from "../images/facebookLogo.svg"
import './LoginStyle.css'


function LoginPage() {

  const submitForm = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    console.log(payload)
  }

  return (
    <form onSubmit={submitForm}>
      <img class="logo" src={zipLogoBig}></img>

      <h1>Log in</h1>

      <label for="username">Username</label>
      <input name="username" type="text" id="username" placeholder='John'></input>

      <label for="password">Password</label>
      <input name="password" type="password" id="password" placeholder='********'></input>

      <button variant="primary" type="submit">Log in</button>

      <a href="" class="forgot-pw">Forgot your password?</a>

      <h2>Or connect with</h2>

      <div class="social-media">
        <img src={googleLogo}></img>
        <img src={appleLogo}></img>
        <img src={facebookLogo}></img>
      </div>

      <div class="sign-up-link">
        <h2>Don't have an account?</h2>
        <a href="/sign-up">Sign up</a>
      </div>
    </form>
  )
}

export default LoginPage