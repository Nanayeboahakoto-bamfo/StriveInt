"use client";

import { useState } from "react";
import { useUploadFileMutation } from "@/redux/slice/apiSlice";

export default function ImagePicker() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadFile, { isLoading, isError }] = useUploadFileMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleUpload = async () => {
    try {
      if (selectedFiles.length > 0) {
        const formData = new FormData();
        selectedFiles.forEach((file) => {
          formData.append("file", file, file.name);
        });
        await uploadFile(formData).unwrap();
        console.log("Files uploaded successfully");
      }
    } catch (error) {
      console.error("Error uploading files", error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={isLoading}>
        {isLoading ? "Uploading" : "Upload"}
      </button>
      {isError && <div>Error uploading files. Please try again.</div>}
    </div>
  );
}
