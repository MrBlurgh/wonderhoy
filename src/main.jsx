import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root"
import ErrorPage from './routes/error';
import Home from './routes/home';
import Art from './routes/art';
import Social from './routes/social';
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    index: <Navigate to="/home" />,
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "art",
        element: <Art />
      },
      {
        path: "social",
        element: <Social />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
