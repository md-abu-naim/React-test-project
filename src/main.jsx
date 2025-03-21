import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import AboutPage from './AboutPage.jsx';
import Contact from './Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/about',
        element: <Contact />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
