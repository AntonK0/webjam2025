import React, { useState } from 'react';
import UploadBox from './UploadBox';

interface UploadBoxExampleProps {
  onFilesChange?: (files: File[]) => void;
}

/**
 * Example usage of the UploadBox component
 */
const UploadBoxExample: React.FC<UploadBoxExampleProps> = ({ onFilesChange }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleUpload = (fileList: FileList) => {
    console.log('Files uploaded:', fileList);
    // Process uploaded files
    const fileArray = Array.from(fileList);
    fileArray.forEach(file => {
      console.log(`- ${file.name} (${file.type})`);
    });
    
    // Update local state
    setFiles(fileArray);
    
    // Call parent callback if provided
    if (onFilesChange) {
      onFilesChange(fileArray);
    }
  };

  return (
    <div className="bg-white p-8 flex justify-center items-center">
        <UploadBox onUpload={handleUpload} multiple={false}/>
    </div>
  );
};

export default UploadBoxExample;

