"use client";

import React, { useState } from "react";
import {
  useAddPostMutation,
  useUploadFileMutation,
} from "@/redux/slice/apiSlice";
import styles from "./dashboard.module.css";
import Loader from "@/app/(admin)/components/loader";
import { BookImage, ImagePlus, Plus } from "lucide-react";
import Image from "next/image";
import universities from "@/lib/universities";
import departments from "@/lib/departments";
import countries from "@/lib/countries";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEvent = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadFile, { isLoading: isUploading, isError: isUploadError }] =
    useUploadFileMutation();
  const [eventimageurl, setEventImageUrl] = useState("");
  const [eventname, setEventtName] = useState("");
  const [eventdetail, setEventDetail] = useState("");
  const [location, setLocation] = useState("");
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

  const handleAddImage = async () => {
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
        eventimageurl: uploadedImageUrl,
        eventname,
        eventdetail,
        location,
      };

      await addPost(newPostData).unwrap();
      notify();
      router.push("/admin/pages/addmentor");
    } catch (error) {
      // Handle error
      console.error("Error adding post:", error);
    }
  };

  const handleClear = () => {
    setEventImageUrl("");
    setEventtName("");
    setEventDetail("");
    setLocation("");
  };

  return (
    <div className={styles.container}>
     <form style={{ display: "flex", flexDirection: "column" }}>
     <h2 className="font-bold text-[20px] ">Event Information</h2>
     <br/>
          <input
            style={{ border: "1px solid black" }}
            placeholder="Event Name"
            className="rounded-md px-2 py-3"
            type="text"
            value={eventname}
            onChange={(e) => setEventtName(e.target.value)}
          />
          <br/>
          <div className={styles.col2}>

          <input
            style={{ border: "1px solid black" }}
            placeholder="Location"
            className="rounded-md px-2 py-3"
            type="text"
            value={eventname}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="relative inline-block bg-[#0676D6]  text-white rounded-md py-3 px-5 cursor-pointer overflow-hidden m-2">
            <span className="font-medium"> + Upload Photo for event Here</span>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="absolute top-0 left-0 cursor-pointer opacity-0 w-full h-full"
            />
          </div>
        </div>
        <br />
          <label>Event details...</label>
          <textarea
            style={{ border: "1px solid black", }}
            // placeholder=" "
            className="rounded-md px-2 py-5"
            value={eventdetail}
            onChange={(e) => setEventDetail(e.target.value)}
          />
         
        <div className={styles.line} style={{ padding: "0.5rem 0" }} />
       
        <br/>
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
            onClick={handleAddImage}
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

export default AddEvent;
