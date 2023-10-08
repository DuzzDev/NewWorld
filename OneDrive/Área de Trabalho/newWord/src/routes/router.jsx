import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/RootLayout/RootLayout';
import Home from '../pages/Home/Home';
import React from 'react';
import AboutUs from '../pages/AboutUs/AboutUs';
import Planet3D from '../pages/Planet3D/Planet3D';



const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children:[{
      path:'/',
      element: <Home/>,
      index: true
    },
    {
      path: 'AboutUs',
      element: <AboutUs/>
    },
    {
      path:'3DPlanet',
      element: <Planet3D/>
    }]      
  }
]);
export default router;
