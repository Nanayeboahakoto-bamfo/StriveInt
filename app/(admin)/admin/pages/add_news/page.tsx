"use client";

import React, { useState } from "react";
import {
  useAddPostMutation,
  useUploadFileMutation,
} from "@/redux/slice/apiSlice";
import Loader from "@/app/(admin)/components/loader";
import categories from "@/styles/lib/categories";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNews = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadFile, { isLoading: isUploading, isError: isUploadError }] =
    useUploadFileMutation();
  const [title, setTitle] = useState("");
  const [imageurl, setImageUrl] = useState("");
  const [article, setArticle] = useState("");
  const [categorie, setCategory] = useState("");

  const [addPost, { isLoading, isError }] = useAddPostMutation();
  const notify = () => toast("Added Sucessfully");
  const notifytwo = () => toast("File uploaded Sucessfully");

  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleAddPost = async () => {
    try {
      let uploadedImageUrl = "";
      if (selectedFiles.length > 0) {
        const formData = new FormData();
        selectedFiles.forEach((file) => {
          formData.append("file", file, file.name);
        });

        const response = await uploadFile(formData).unwrap();

        if (Array.isArray(response) && response.length > 0) {
          uploadedImageUrl = response[0].imageUrl;
          notifytwo();
        }
       
      }

      const newPostData = {
        title,
        imageurl: uploadedImageUrl,
        article,
        categorie,
      };

      await addPost(newPostData).unwrap();
      notify();
      router.push("/admin/pages/manage_news");
    } catch (error) {
      // Handle error
      console.error("Error adding post:", error);
    }
  };

  const handleClear = () => {
    setTitle("");
    setImageUrl("");
    setArticle("");
    setCategory("");
  };

  return (
      <div className={styles.container}>
       <form style={{ display: "flex", flexDirection: "column" }}>
       <h2 className="font-bold text-[20px] ">Write News/Blogs</h2>
         
            <input
              style={{ border: "1px solid black" }}
              placeholder="Title"
              className="rounded-md px-2 py-3"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br/>
           <div className={styles.col2}>
          <div className="relative inline-block bg-[#0676D6]  text-white rounded-md py-3 px-5 cursor-pointer overflow-hidden m-2">
            <span className="font-medium">Upload News +</span>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="absolute top-0 left-0 cursor-pointer opacity-0 w-full h-full"
            />
          </div>
          <select
            style={{ border: "1px solid black" }}
            className="rounded-md px-2 py-3 text-md m-2"
            value={categorie}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          </div>

          

          <br />
          
            <textarea
              style={{ border: "1px solid black", }}
              placeholder="News Article Body"
              className="rounded-md px-2 py-5"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />
          
          
          
      
      
   

        <br />
        <div className="justify-between flex">
          <button
            style={{ border: "1px solid #0676D6" }}
            className=" bg-slate-300 text-[#0676D6] border-[#0676D6] px-10 py-2 rounded-md font-semibold"
            type="button"
            onClick={handleClear}
            disabled={isLoading}
          >
            Reset
          </button>
          <button
            className="bg-[#0676D6] text-white px-10 py-2 rounded-md"
            type="button"
            onClick={handleAddPost}
            disabled={isLoading}
          >
            {isLoading ? "Submitting" : "Submit"}
          </button>
        </div>

        {isError && <div>Error adding post. Please try again.</div>}
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
 
    
  );
};

export default AddNews;
