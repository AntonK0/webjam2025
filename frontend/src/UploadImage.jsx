import { useState } from 'react';
import UploadBoxExample from "./components/UploadBoxExample.tsx";
import LogoutHeader from "./components/LogoutHeader.tsx";
// import MainInstruction from "./components/MainInstruction.tsx";
// import SubInstruction from "./components/SubInstruction.tsx";
import Next from "./components/Next.tsx";

function UploadImage() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleNext = () => {
    // Process uploaded images
    console.log('Submitting files:', uploadedFiles);
  };

  return (
    <>
      <LogoutHeader />
      <h1 className="text-2xl font-bold text-black mx-9">Let's see what we're working with.</h1>
      <UploadBoxExample onFilesChange={setUploadedFiles} />
      <Next onClick={handleNext} />
    </>
  );
}

export default UploadImage;
