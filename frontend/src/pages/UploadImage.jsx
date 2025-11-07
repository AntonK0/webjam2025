import { useState } from 'react';
import LogoutHeader from "../components/LogoutHeader.tsx";
import { useLocation, useNavigate } from 'react-router-dom';
import UploadBoxExample from '../components/UploadBoxExample.tsx';
// Only one image upload page accepted

function UploadImage() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const userValues = useLocation().state;

  let navigate = useNavigate();

  if (uploadedFiles.length > 0) {
    // Process uploaded images
    // console.log('Submitting files:', uploadedFiles);
    userValues.files = uploadedFiles
    navigate('/loading', {state: userValues})
  };

  return (
    <div className='background bg-white h-screen'>
      <LogoutHeader />
      <div className='bg-white pt-6' >
        <h1 className="text-2xl font-bold text-black mx-12">Let's see what we're working with.</h1>
      </div>
      <h2 className="text-md text-gray-600 mx-12 mt-4">Take a picture of the product aisle.
        Make sure to get everything in frame.</h2>
      <UploadBoxExample onFilesChange={setUploadedFiles} />
    </div>
  );
}

export default UploadImage;
