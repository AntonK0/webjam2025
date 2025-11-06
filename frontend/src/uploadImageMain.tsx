import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UploadImage from './UploadImage.jsx'

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <UploadImage />
    </StrictMode>,
  )
}

