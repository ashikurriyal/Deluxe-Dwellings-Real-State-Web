import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProviders from './Providers/AuthProviders';
import UpdateProfile from './Components/UpdateProfile';
import PrivateRoutes from './Routes/PrivateRoutes';
import Booking from './Components/Booking';
import UserProfile from './Components/UserProfile';
import ErrorPage from './Components/ErrorPage';
import PropertyDetails from './Components/PropertyDetails';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/booking',
        element: <PrivateRoutes><Booking></Booking></PrivateRoutes>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
      },
      {
        path: '/userProfile',
        element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
      },
      {
        path: '/property/:id',
        element: <PrivateRoutes><PropertyDetails></PropertyDetails></PrivateRoutes>,
        loader: () => fetch('https://ashikurriyal.github.io/json_data/data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>,
)
