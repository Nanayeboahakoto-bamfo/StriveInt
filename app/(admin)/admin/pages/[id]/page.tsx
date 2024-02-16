"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  useGetPostByIdQuery,
  useUpdatePostMutation,
  useUploadFileMutation,
} from "@/redux/slice/apiSlice";
import Loader from "@/app/(admin)/components/loader";
import categories from "@/styles/lib/categories";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditPost = ({ params }: { params: { id: string } }) => {
  const postId = params.id;

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { data: post, error, isLoading } = useGetPostByIdQuery({ id: postId });
  const [uploadFile, { isLoading: isUploading, isError: isUploadError }] =
    useUploadFileMutation();
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();

  const [updatedPostData, setUpdatedPostData] = useState({
    title: "",
    imageurl: "",
    article: "",
    categorie: "",
  });
  const notify = () => toast("Edit Sucessfully");
  const notifytwo = () => toast("File uploaded Sucessfully");
  const router = useRouter();

  const handleUpdate = async () => {
    try {
      let uploadedImageUrl = updatedPostData.imageurl;

      // Check if new files are selected
      if (selectedFiles.length > 0) {
        const formData = new FormData();
        selectedFiles.forEach((file) => {
          formData.append("file", file, file.name);
        });

        // Use the uploadFile mutation to handle file upload
        const response = await uploadFile(formData).unwrap();

        // Assuming the API returns an array of uploaded files
        if (Array.isArray(response) && response.length > 0) {
          uploadedImageUrl = response[0].imageUrl;
          notifytwo();
        }
      }

      const filteredUpdatedPostData = Object.fromEntries(
        Object.entries(updatedPostData).filter(([key, value]) => value !== "")
      );

      // Update the post with the new data
      await updatePost({
        id: postId,
        updatedPostData: {
          ...filteredUpdatedPostData,
          imageurl:
            selectedFiles.length > 0 ? uploadedImageUrl : postData.imageurl,
        },
      });
      notify();
      router.push("/admin/pages/manage_news");
    } catch (error) {
      console.error("Error updating post", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error || !post) {
    return <div>Error fetching post</div>;
  }

  const postData = post.data;

  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  return (
    <div className="h-full bg-slate-300 items-center px-10">
      <br />
      <Link
        className="bg-[#0676D6] text-white px-5 py-2 rounded-md"
        href="/admin/pages/manage_news"
      >
        Back
      </Link>
      <div className="flex justify-center pb-10">
        <h2 className="font-bold text-[30px]">Edit News/Blogs</h2>
      </div>
      {postData && (
        <>
          <form
            className="mt-10"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>News article and blog Title</label>
            <input
              style={{ border: "1px solid black" }}
              className="rounded-md px-2 py-3"
              type="text"
              id="title"
              value={updatedPostData.title || postData.title}
              onChange={(e) =>
                setUpdatedPostData({
                  ...updatedPostData,
                  title: e.target.value,
                })
              }
            />
            <br />
            <label>News article and blog Content</label>
            <textarea
              style={{ border: "1px solid black" }}
              className="rounded-md px-2 py-5"
              id="article"
              value={updatedPostData.article || postData.article}
              onChange={(e) =>
                setUpdatedPostData({
                  ...updatedPostData,
                  article: e.target.value,
                })
              }
            />
            <br />
            <div className="bg-slate-300 flex columns-2 items-center justify-start">
              <label>New Category</label>
              <select
                style={{ border: "1px solid black" }}
                className="rounded-md px-2 py-3 text-md m-2"
                value={updatedPostData.categorie || postData.categorie}
                onChange={(e) =>
                  setUpdatedPostData({
                    ...updatedPostData,
                    categorie: e.target.value,
                  })
                }
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <label>Image</label>
              {/* <input
                  className="m-2"
                  type="file"
                  id="imageurl"
                  onChange={handleFileChange}
                /> */}
              <div className="relative inline-block bg-[#0676D6]  text-white rounded-md py-3 px-5 cursor-pointer overflow-hidden m-2">
                <span className="font-medium">Upload +</span>
                <input
                  type="file"
                  id="imageurl"
                  onChange={handleFileChange}
                  className="absolute top-0 left-0 cursor-pointer opacity-0 w-full h-full"
                />
              </div>
            </div>
            <br />
            <div className="flex justify-start items-center">
              <p>
                <span className="font-bold">Last Updated: </span>
                {formatDate(postData.updatedAt)}
              </p>
            </div>
            <div className="justify-end flex">
              <button
                className="bg-[#0676D6] text-white px-10 py-2 rounded-md"
                type="button"
                onClick={handleUpdate}
                disabled={isLoading}
              >
                {isLoading ? "Editing" : "Edit"}
              </button>
            </div>
          </form>
        </>
      )}
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

export default EditPost;
