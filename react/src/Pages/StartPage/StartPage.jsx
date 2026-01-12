import React, { useState, useRef } from 'react'
import Button from "../../Components/Button";
import { useNavigate } from 'react-router-dom'

const StartPage = () => {
  const nav = useNavigate();
  const [resume, setResume] = useState(null);
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  const handleFile = (file) => {
    if (!allowedTypes.includes(file.type)) {
      setError("Only PDF or DOCX files are allowed");
      return;
    }

    setError("");
    setIsProcessing(true);

    // Simulate processing time (e.g. upload / parsing)
    setTimeout(() => {
      setResume(file);
      setIsProcessing(false);
    }, 2000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleReupload = () => {
    setResume(null);
    setError("");
    setIsProcessing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">

      <h1 className="text-4xl font-bold text-white mb-6">
        Upload Your Resume
      </h1>

      {/* Upload Box */}
      <div
        className="w-[420px] h-[220px] bg-white/40 backdrop-blur-xl backdrop-saturate-150
        border border-white/40 shadow-2xl z-50 rounded-2xl
        flex flex-col items-center justify-center text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >

        {/* Processing State */}
        {isProcessing && (
          <>
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-blue-600 font-medium">
              Processing your resume...
            </p>
          </>
        )}

        {/* Upload State */}
        {!resume && !isProcessing && (
          <>
            <p className="text-gray-700 mb-2 font-medium">
              Drag & drop your resume here
            </p>

            <p className="text-sm text-gray-600 mb-4">
              Supported formats: PDF, DOCX
            </p>

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept=".pdf,.docx"
              onChange={handleFileChange}
            />

            <Button
              text="Upload from Device"
              onClick={() => fileInputRef.current.click()}
            />
          </>
        )}

        {/* Success State */}
        {resume && !isProcessing && (
          <>
            <p className="text-blue-600 font-semibold mb-2">
              Resume Uploaded Successfully ✅
            </p>
            <p className="text-sm text-gray-800">
              {resume.name}
            </p>
          </>
        )}

      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}

      {/* After upload */}
      {resume && !isProcessing && (
        <div className="flex gap-6 mt-8 items-center">
          <Button text="Start Preparation" onClick={() => nav('/SelectPage')} />
          <Button text="Re-upload Resume" onClick={handleReupload} />
        </div>
      )}

    </div>
  )
}

export default StartPage
