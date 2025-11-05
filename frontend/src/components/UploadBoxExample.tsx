import React from 'react';
import UploadBox from './UploadBox';

/**
 * Example usage of the UploadBox component
 */
const UploadBoxExample: React.FC = () => {
  const handleUpload = (files: FileList) => {
    console.log('Files uploaded:', files);
    // Process uploaded files
    Array.from(files).forEach(file => {
      console.log(`- ${file.name} (${file.type})`);
    });
  };

  return (
    <div className="bg-white p-8 flex justify-center items-center">
        <UploadBox onUpload={handleUpload} />
    </div>
  );
};

export default UploadBoxExample;

