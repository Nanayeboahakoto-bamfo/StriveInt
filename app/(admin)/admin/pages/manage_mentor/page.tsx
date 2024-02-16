"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  useDeletePostMutation,
  useSearchPostsByCategoryQuery,
} from "@/redux/slice/apiSlice";
import Loader from "@/app/(admin)/components/loader";
import categories from "@/styles/lib/categories";
import Post from "@/app/(admin)/components/Post";
import { CiSearch } from "react-icons/ci";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ApiResponse = {
  id: string;
  title: string;
  imageurl: string;
  article: string;
  categorie: string;
  createdAt: string;
  updatedAt: string;
};

const List = () => {
  const [deletePost] = useDeletePostMutation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const notify = () => toast("Deleted Sucessfully");

  // Use the searchPostsByCategoryQuery hook with the entered search term and selected category
  const {
    data: searchResults,
    error: searchError,
    isLoading: isSearchLoading,
    refetch,
  } = useSearchPostsByCategoryQuery({
    search: searchTerm,
    categorie: selectedCategory,
  });

  const postArray = Array.isArray(searchResults?.data)
    ? searchResults?.data
    : [];

  if (isSearchLoading) {
    return <Loader />;
  }

  if (searchError) {
    return <div>Error fetching posts</div>;
  }

  async function handleDelete(id: string) {
    try {
      const result = await deletePost({ id });
      console.log("deleted successfully", result); // Deleted post data
      notify();
      refetch();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  const handleSearch = async () => {
    // Trigger search only when the button is clicked
    try {
      // Perform the search using the entered search term and selected category
      await refetch();
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <>
      <div className="p-5">
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="relative flex items-center">
            <CiSearch size={20} className="absolute left-3 text-gray-500" />
            <input
              className="py-2 pl-10 w-[350px] rounded-[5px] m-2 bg-slate-100"
              type="text"
              name="search"
              placeholder="Search here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-[#0676D6] text-white px-3 py-2 rounded-[5px]"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="bg-slate-300 flex columns-2 items-center justify-between pl-5 pr-5 pt-5 relative">
        <h3 className="font-bold text-2xl">News/Blogs</h3>
        <div className="relative inline-block">
          <select
            className="w-[120px] py-3 px-3 rounded-[50px] text-white bg-[#0676D6] appearance-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" className="bg-white text-black">
              Category 
             </option>
            {categories.map((category) => (
              <option
                key={category}
                value={category}
                className="bg-white text-black"
              >
                {category}
              </option> 
            ))}
          </select>
          <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-white">
            {selectedCategory ? <BiChevronUp /> : <BiChevronDown />}
          </div>
        </div>
      </div>

      <div className="bg-slate-300 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {postArray.map((post: ApiResponse) => (
            <Post key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      </div>
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
    </>
  );
};

export default List;
