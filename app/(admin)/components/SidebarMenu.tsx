"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TfiWrite } from "react-icons/tfi";
import { PiNotePencilBold, PiNotepadFill } from "react-icons/pi";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa6";
import { BsPersonFillGear } from "react-icons/bs";
import { SiOpencollective } from "react-icons/si";
import { FaFilePen } from "react-icons/fa6";
import { FaSquarePen } from "react-icons/fa6";
import { FaBloggerB } from "react-icons/fa";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { MdOutlineEventNote } from "react-icons/md";
import { MdOutlineEventRepeat } from "react-icons/md";
import { BsPersonFillUp } from "react-icons/bs";

const Submenu: React.FC = () => {
  return (
    <div className="ml-6 mt-2">
      <div className="hover:bg-[#1092ff] hover:rounded-md p-2 flex items-center justify-start text-center gap-2 mb-2">
        <FaSquarePen size={18} />
        <Link className="text-sm font-semibold" href="/admin/pages/add_news">
          Write News/Blogs
        </Link>
      </div>
      <div className="hover:bg-[#1092ff] hover:rounded-md p-2 flex items-center justify-start text-center gap-2 mb-2">
        <FaBloggerB size={18} />
        <Link className="text-sm font-semibold" href="/admin/pages/manage_news">
          Manage News/Blogs
        </Link>
      </div>
    </div>
  );
};

const MentorsSubmenu: React.FC = () => {
  return (
    <div className="ml-6 mt-2">
      <div className="hover:bg-[#1092ff] hover:rounded-md p-2 flex items-center justify-start text-center gap-2 mb-2">
        <BsPersonFillAdd size={18} />
        <Link className="text-sm font-semibold" href="/admin/pages/add_mentor">
          Add Mentors
        </Link>
      </div>
      <div className="hover:bg-[#1092ff] hover:rounded-md p-2 flex items-center justify-start text-center gap-2 mb-2">
        <BsPersonFillGear size={18} />
        <Link className="text-sm font-semibold" href="/admin/pages/manage_mentor">
          Manage Mentors
        </Link>
      </div>
    </div>
  );
};
const StudentsSubmenu: React.FC = () => {
  return (
    <div className="ml-6 mt-2">
      <div className="hover:bg-[#1092ff] hover:rounded-md p-2 flex items-center justify-start text-center gap-2 mb-2">
        <BsPersonFillUp  size={18} />
        <Link className="text-sm font-semibold" href="/admin/pages/add_student">
          Add Students
        </Link>
      </div>
      <div className="hover:bg-[#1092ff] hover:rounded-md p-2 flex items-center justify-start text-center gap-2 mb-2">
        <BsPersonFillGear size={18} />
        <Link className="text-sm font-semibold" href="/admin/pages/manage_student">
          Manage Students
        </Link>
      </div>
    </div>
  );
};

const EventsSubmenu: React.FC = () => {
  return (
    <div className="ml-6 mt-2">
      <div className="hover:bg-[#1092ff] hover:rounded-md p-2 flex items-center justify-start text-center gap-2 mb-2">
        <MdOutlineEventNote size={18} />
        <Link className="text-sm font-semibold" href="/admin/pages/add_event">
          View Events
        </Link>
      </div>
      <div className="hover:bg-[#1092ff] hover:rounded-md p-2 flex items-center justify-start text-center gap-2 mb-2">
        <MdOutlineEventRepeat size={18} />
        <Link className="text-sm font-semibold" href="/admin/pages/manage_event">
          Manage Events
        </Link>
      </div>
    </div>
  );
};



const SidebarMenu: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMentorsOpen, setMentorsOpen] = useState(false);
  const [isEventsOpen, setEventsOpen] = useState(false);
  const [isStudentsOpen, setStudentsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMentorsToggle = () => {
    setMentorsOpen(!isMentorsOpen);
  };

  const handleStudentsToggle = () => {
    setStudentsOpen(!isStudentsOpen);
  };

  const handleEventsToggle = () => {
    setEventsOpen(!isEventsOpen);
  };

  

  return (
    <>
      <div
        className={`hover:bg-[#1092ff] hover:rounded-md p-3 flex items-center justify-start text-center gap-3 mb-2 ${
          isMentorsOpen ? "bg-[#1092ff] rounded-md" : ""
        }`}
        onClick={handleMentorsToggle}
      >
        <IoPerson size={25} />
        <Link className="text-md font-semibold" href="#">
          Mentors
        </Link>
      </div>

      {isMentorsOpen && <MentorsSubmenu />}

      <div
        className={`hover:bg-[#1092ff] hover:rounded-md p-3 flex items-center justify-start text-center gap-3 mb-2 ${
          isStudentsOpen ? "bg-[#1092ff] rounded-md" : ""
        }`}
        onClick={handleStudentsToggle}
      >
        <FaUserGraduate size={20} />
        <Link className="text-md font-semibold" href="#">
          Students
        </Link>
      </div>

      {isStudentsOpen && <StudentsSubmenu />}

      <div
        className={`hover:bg-[#1092ff] hover:rounded-md p-3 flex items-center justify-start text-center gap-3 mb-2 ${
          isDropdownOpen ? "bg-[#1092ff] rounded-md" : ""
        }`}
        onClick={handleDropdownToggle}
      >
        <PiNotepadFill size={20} />
        <Link className="text-md font-semibold" href="#">
          News/Blogs
        </Link>
      </div>

      {isDropdownOpen && <Submenu />}

      <div
        className={`hover:bg-[#1092ff] hover:rounded-md p-3 flex items-center justify-start text-center gap-3 mb-2 ${
          isEventsOpen ? "bg-[#1092ff] rounded-md" : ""
        }`}
        onClick={handleEventsToggle}
      >
        <BiSolidCalendarEvent size={25} />
        <Link className="text-md font-semibold" href="#">
          Events
        </Link>
      </div>

      {isEventsOpen && <EventsSubmenu />}

     

      <div className="hover:bg-[#1092ff] hover:rounded-md p-3 flex items-center justify-start text-center gap-3 mb-2">
        <SiOpencollective size={20} />
        <Link className="text-md font-semibold" href="#">
          Manage Resources
        </Link>
      </div>
    </>
  );
};

export default SidebarMenu;
