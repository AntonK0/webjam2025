import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import uploadImageMain from './uploadImageMain.jsx'
import AssessmentPage from './pages/AssessmentPage.js';
import UploadImage from './pages/UploadImage.jsx';
import Loading from './pages/Loading.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Results from './pages/Results.js';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/assessment", element: <AssessmentPage />},
  {path: "/uploadImage", element: <UploadImage />},
  {path: "/loading", element: <Loading />},
  {path: "/results", element: <Results />}
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)

