import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'; 
import NotificationPage from './pages/notification';
import Signin from './pages/Signin';
import Signup from './pages/Signup'
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },

  {
    path: "/Home",
    element: <Home />,
  },

  {
    path: "/notification",
    element: <NotificationPage />,
  },

  {
    path: "/Signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <RouterProvider router={router}>
    </RouterProvider>
  </>
);
