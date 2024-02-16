"use client";

import { sidebarcolor } from "../../utils/color";
import Link from "next/link";
import Image from "next/image";
import Logo from "./components/logo";
import { TfiWrite } from "react-icons/tfi";
import { PiNotePencilBold, PiNotepadFill } from "react-icons/pi";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa6";
import { BsPersonFillGear } from "react-icons/bs";
import { SiOpencollective } from "react-icons/si";
import { FaFilePen } from "react-icons/fa6";
import { FaSquarePen } from "react-icons/fa6";
import SidebarMenu from "./components/SidebarMenu";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen max-h-screen">
      <div className="flex flex-col bg-[#0676D6] overflow-hidden">
        <div className=" px-2">
          <Logo />
        </div>

        <div className="bg-[#0676D6] flex-1 text-white overflow-auto h-screen py-3 px-5">
          <SidebarMenu />
        </div>

        <div className="bg-[#0676D6] flex items-center gap-2 h-20 px-5">
          <div className="min-w-[50px]">
            <Image
              src={"https://i.ibb.co/R40RjbC/sakib-2.png"}
              alt={"name"}
              height={50}
              width={50}
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold text-white">Jane Cooper</p>
          </div>
        </div>
      </div>

      <div className="overflow-auto">{children}</div>
    </div>
  );
}
