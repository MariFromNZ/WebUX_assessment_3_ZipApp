import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommunityPage from './pages/CommunityPage';
import DraftUploadPage from './pages/DraftUploadPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "community",
    element: <CommunityPage/>,
  },
  {
    path: "draft-upload",
    element: <DraftUploadPage/>,
  },
  {
    path: "profile",
    element: <ProfilePage/>,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "sign-up",
    element: <SignUpPage/>,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
