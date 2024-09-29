// Zach's sign-up page

import React, {useState} from 'react';
import zipLogoBig from "../images/zipLogoBig.svg";
import './SignUpPage.css';
import * as Yup from 'yup';


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Invalid email format"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
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
      setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "", });
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
      <img className="logo" src={zipLogoBig} alt="Large logo"></img>

      <h1>Sign up</h1>

      <div className="names">
        <div>
            <label htmlFor="first-name">First name</label>
            <input 
              id="first-name"
              name="firstName" 
              type="text" 
              placeholder='John'
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>

        <div>
            <label htmlFor="last-name">Last Name</label>
            <input 
              id="last-name"
              name="last-name" 
              type="text"
              placeholder='Doe'
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>
      </div>

      <label htmlFor="email">Email</label>
      <input 
        id="email"
        name="email" 
        type="email"
        placeholder='JohnDoe@gmail.com'
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <label htmlFor="password">Password</label>
      <input  
        id="password"
        name="password" 
        type="password"
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <div className="error">{errors.password}</div>}

      <label htmlFor="confirmPassword">Confirm password</label>
      <input 
        id="confirmPassword"
        name="confirmPassword" 
        type="password"
        placeholder='Confirm password'
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}

      <button type="submit">Sign up</button>

      <a href="/login">Go back to login</a>
    </form>
  );
};

export default SignUpPage;