import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import uploadImageMain from './uploadImageMain.jsx'
import AssessmentPage from './components/AssessmentPage.js';
import UploadImage from './pages/UploadImage.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/assessment", element: <AssessmentPage />},
  {path: "/uploadImage", element: <UploadImage />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

