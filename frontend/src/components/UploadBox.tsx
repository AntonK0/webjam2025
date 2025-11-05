import React from 'react';

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
        className="absolute inset-0 border-2 border-gray-400 border-dashed rounded-2xl cursor-pointer 
                   hover:bg-gray-50 transition-colors duration-200 flex flex-col items-center justify-center"
      >
        {/* Upload Icon */}
        <div className="w-[43px] h-[43px] mb-4 flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#808080" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </div>

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

