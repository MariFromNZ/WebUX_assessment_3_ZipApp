import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommunityPage from './pages/CommunityPage';
import PostDescriptionPage from './pages/PostDescriptionPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import CameraPage from './pages/CameraPage';
import EditPostPage from './pages/EditPostPage';

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
    path: "post-description",
    element: <PostDescriptionPage/>,
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
  },
  {
    path: "camera",
    element: <CameraPage/>,
  },
  {
    path: "edit-post",
    element: <EditPostPage/>,
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
