import React from 'react';
import { RiImageAddLine } from '@remixicon/react';

interface UploadBoxProps {
  onUpload?: (files: FileList) => void;
  label?: string;
  acceptedFileTypes?: string;
  multiple?: boolean;
  className?: string;
}

const UploadBox: React.FC<UploadBoxProps> = ({ 
  onUpload, 
  label = 'Upload Pictures',
  acceptedFileTypes = 'image/*',
  multiple = true,
  className = ''
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0 && onUpload) {
      onUpload(files);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files.length > 0 && onUpload) {
      onUpload(files);
    }
  };

  return (
    <div 
      className={`relative w-[301px] h-[207px] ${className}`}
      data-name="Upload Box"
    >
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="absolute inset-0 bg-white border-2 border-gray-400 border-dashed rounded-2xl cursor-pointer 
                   hover:bg-gray-50 transition-colors duration-200 flex flex-col items-center justify-center"
      >
        {/* Upload Icon */}
        <RiImageAddLine size="43px" className='opacity-50 text-black'/>

        {/* Upload Text */}
        <p className="text-sm text-gray-400 text-center">
          {label}
        </p>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedFileTypes}
        multiple={multiple}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadBox;

