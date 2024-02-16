"use client";
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation"
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

type PostProps = {
  post: {
    id: string;
    title: string;
    imageurl: string;
    article: string;
    categorie: string;
    createdAt: string;
    updatedAt: string;
  };
  onDelete: (id: string) => void;
};

const extractFirst20Words = (text: string): string => {
  const words = text.split(" ");
  const first20Words = words.slice(0, 20).join(" ");
  return first20Words;
};
const extractFirst10Words = (text: string): string => {
  const words = text.split(" ");
  const first10Words = words.slice(0, 10).join(" ");
  return first10Words;
};

const Post: React.FC<PostProps> = ({ post, onDelete }) => {
  const router=useRouter()
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
      // timeZoneName: "short",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOption = event.target.value;
    
    if (selectedOption === "edit") {
      router.push(`/admin/pages/${post.id}`)
    } else if (selectedOption === "delete") {
   
      onDelete(post.id);
    }
  };

  return (
    <div key={post.id}>
      <Image
        alt={post.title}
        src={post.imageurl}
        height={500}
        width={500}
        className="rounded-xl"
        style={{ objectFit: "cover", width: "300px", height: "200px" }}
      />
      <h3 className="py-2 font-semibold text-xl">{formatDate(post.updatedAt)}</h3>
      <div className="h-[160px]">
      <h3 className="font-bold text-xl">{extractFirst10Words(post.title)}</h3>
      <p>{extractFirst20Words(post.article)}</p>
      </div>

      <div className="flex justify-start items-center text-clip">
        <button className="bg-[#0676D6] text-white px-5 py-2 mr-5 rounded-[5px]">
          Read More
        </button>
        <div className="relative inline-block">
          <select
            className="py-2 px-5 rounded-[5px] text-black bg-slate-300 appearance-none"
            style={{ border: "1px solid black" }}
            onChange={handleDropdownChange}
          >
            <option value="" className="text-start" disabled selected>
            Options
            </option>
          <option value="edit" className="text-right">
            Edit post
          </option>
          <option value="delete" className="text-right">
            Delete post
          </option>
           
          </select>
          <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-black">
          {isDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
