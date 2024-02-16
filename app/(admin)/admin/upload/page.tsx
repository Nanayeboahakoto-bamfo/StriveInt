"use client";
// "use client" is not required for components
import { useState } from 'react';
import useSWRMutation from 'swr/mutation';

async function uploadDocuments(
  url: string,
  { arg }: { arg: { files: File[] } }
): Promise<Object[]> {
  const body = new FormData();
  arg.files.forEach((file) => {
    body.append('file', file, file.name);
  });

  const response = await fetch(url, { method: 'POST', body });
  return await response.json();
}

// Export ImagePicker as the default component
export default function ImagePicker() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { trigger } = useSWRMutation('/api/post/upload', uploadDocuments);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleUpload = () => {
    trigger({ files: selectedFiles });
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
