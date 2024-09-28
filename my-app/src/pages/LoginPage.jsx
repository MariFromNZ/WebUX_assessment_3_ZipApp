// Zach's login page

import React, { useState } from 'react';
import zipLogoBig from "../images/zipLogoBig.svg";
import googleLogo from "../images/googleLogo.svg";
import appleLogo from "../images/appleLogo.svg";
import facebookLogo from "../images/facebookLogo.svg";
import './LoginStyle.css';
import * as Yup from 'yup';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").email("Invalid email format"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters long"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors on new submission
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
      
      // Redirect to the home page after successful validation
      window.location.href = "/";

      // Reset form if needed
      setFormData({ email: "", password: "" });
    } catch (error) {
      const newErrors = {};
      error.inner.forEach(err => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <img className="logo" src={zipLogoBig} alt="Large logo" />

      <h1>Log in</h1>

      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        placeholder='JohnDoe@gmail.com'
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        placeholder='********'
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <div className="error">{errors.password}</div>}

      <button type="submit">Log in</button>

      <a href="" className="forgot-pw">Forgot your password?</a>

      <h2>Or connect with</h2>

      <div className="social-media">
        <img src={googleLogo} alt="Google logo" />
        <img src={appleLogo} alt="Apple logo" />
        <img src={facebookLogo} alt="Facebook logo" />
      </div>

      <div className="sign-up-link">
        <h2>Don't have an account?</h2>
        <a href="/sign-up">Sign up</a>
      </div>
    </form>
  );
};

export default LoginPage;