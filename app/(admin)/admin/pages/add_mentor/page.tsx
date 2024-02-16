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

import universities from "@/styles/lib/universities";
import departments from "@/styles/lib/departments";
import countries from "@/styles/lib/countries";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMentor = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadFile, { isLoading: isUploading, isError: isUploadError }] =
    useUploadFileMutation();
  const [mentorimageurl, setMentorImageUrl] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [companylogoimageurl, setCompanyLogoImageUrl] = useState("");
  const [university, setUniversity] = useState("");
  const [department, setDepartment] = useState("");
  const [coursetitle, setCourseTitle] = useState("");
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
        mentorimageurl: uploadedImageUrl,
        firstname,
        lastname,
        email,
        country,
        bio,
        companyname,
        jobtitle,
        companylogoimageurl: uploadedImageUrl,
        university,
        department,
        coursetitle,
      };

      // await addPost(newPostData).unwrap();
      notify();
      router.push("/admin/pages/addmentor");
    } catch (error) {
      // Handle error
      console.error("Error adding post:", error);
    }
  };

  const handleClear = () => {
    setMentorImageUrl("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setCountry("");
    setBio("");
    setCompanyName("");
    setJobTitle("");
    setCompanyLogoImageUrl("");
    setUniversity("");
    setDepartment("");
    setCourseTitle("");
  };

  return (
    <div className={styles.container}>
     <form style={{ display: "flex", flexDirection: "column" }}>
     <h2 className="font-bold text-[20px] ">Mentors Information</h2>
        <div className={styles.col2}>
          <input
            style={{ border: "1px solid black" }}
            placeholder="First Name eg. Blessed"
            className="rounded-md px-2 py-3"
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            style={{ border: "1px solid black" }}
            placeholder="Last Name eg. Pepple"
            className="rounded-md px-2 py-3"
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <br />

        <div className={styles.col2}>
          <input
            style={{ border: "1px solid black" }}
            placeholder="Email: eg. StriveInt@gmail.com"
            className="rounded-md px-2 py-3"
            type="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            style={{ border: "1px solid black" }}
            className="rounded-md px-2 py-3 text-md m-2"
            value={countries}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">United Kingdom</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <br />
        <div className={styles.col2}>
          
          <textarea
            style={{ border: "1px solid black", }}
            placeholder=" About me..."
            className="rounded-md px-2 py-5"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <div 
            className={styles.profile}
            style={{
              position: "relative",
              justifyContent: "center",
              width: 150,
              height: 150,
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                padding: ".3rem",
                background: "blue",
                border: "2px solid white",
                borderRadius: "99999px",
                color: "white",
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            >
              <ImagePlus size={34} />
            </div>
              <label
                htmlFor="profilePic"
                style={{
                position: "absolute",
                inset: "0",
                zIndex: 9999,
                cursor: "pointer",
              }}
            />
              <Image
                src={"/profile.png"}
                alt="profile"
                width={150}
                height={150}
                style={{ objectFit: "cover", borderRadius: "99999px" }}
              />
              <input
                id="profilePic"
                type="file"
                multiple
                onChange={handleFileChange}
                style={{ visibility: "hidden" }}
              />
          </div>
        </div>
        <div className={styles.line} style={{ padding: "0.5rem 0" }} />
        <br />
        <div className="flex justify-Left pb-5">
          <h2 className="font-bold text-[20px] ">Company Information</h2>
        </div>
        <div className={styles.col3}>
          <input
            style={{ border: "1px solid black" }}
            placeholder="Company Name"
            className="rounded-md px-2 py-3"
            type="text"
            value={companyname}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            style={{ border: "1px solid black" }}
            placeholder="Job Title"
            className="rounded-md px-2 py-3"
            type="text"
            value={jobtitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <div className="relative inline-block bg-[#0676D6]  text-white rounded-md py-3 px-5 cursor-pointer overflow-hidden m-2">
            <span className="font-medium">Upload Logo</span>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="absolute top-0 left-0 cursor-pointer opacity-0 w-full h-full"
            />
          </div>
        </div>
        <div className={styles.line} style={{ padding: "0.5rem 0" }} />
        <br />

        <h2 className="font-bold text-[20px] ">Education Information</h2>
        <div className={styles.col3}>
          <select
            style={{ border: "1px solid black" }}
            className="rounded-md px-2 py-3 text-md m-2"
            value={countries}
            onChange={(e) => setUniversity(e.target.value)}
          >
            {universities.map((university) => (
              <option key={university} value={university}>
                {university}
              </option>
            ))}
          </select>

          <select
            style={{ border: "1px solid black" }}
            className="rounded-md px-2 py-3 text-md m-2"
            value={departments}
            onChange={(e) => setDepartment(e.target.value)}
          >
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>

          <input
            style={{ border: "1px solid black" }}
            placeholder="Bio-Medical Science"
            className="rounded-md px-2 py-3"
            type="text"
            value={coursetitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
        </div>
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

export default AddMentor;
