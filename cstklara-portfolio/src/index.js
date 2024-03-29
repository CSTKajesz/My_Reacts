import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import CVpage from './pages/CVpage'
import SchoolProjectsPage from './pages/SchoolProjectsPage'
import PersonalProjectsPage from './pages/PersonalProjectsPage'
import AboutPage from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/cv",
        element: <CVpage />
      },
      {
        path: "/personal-projects",
        element: <PersonalProjectsPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      }
    ]
    ,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
