"use client";
import { MyContext } from "../../context/MyContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

import logo from "../../public/Group.png";
import Noti from "../../public/Notification.png";
import profile from "../../public/profile.png";
import darrow from "../../public/darrow.png";
import { FaBars } from "react-icons/fa"; // Import menu bar icon

const Header = () => {
  const router = useRouter();
  const { isOpen, setIsOpen } = useContext(MyContext);
  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar open/close
  };

  return (
    <div className="md:min-h-[4rem] min-h-[1rem] w-full flex md:flex-row justify-between items-center py-2 md:py-4 md:px-12 px-2 flex-col-reverse gap-4 bg-white border-b-2 border-baw-baw-g5">
      
      {/* Logo and Menu (FaBars) - Responsive */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <button
          className="lg:hidden bg-baw-baw-g4 p-2 rounded-full text-white"
          onClick={toggleSidebar}
        >
          <FaBars className="h-6 w-6" />
        </button>
        <Image src={logo} height={100} width={100} alt="Logo" />
      </div>

      {/* Search Bar (Visible on large screens only) */}
      <div className="lg:flex gap-4 justify-center items-center hidden lg:ml-44">
        <h2>Search</h2>
        <input
          type="text"
          className="outline-none border-2 rounded-2xl px-2 py-2"
          placeholder="Type & search"
        />
      </div>

      {/* Profile and Notifications (Visible on large screens only) */}
      <div className="flex justify-end lg:flex-1">
        <div className="lg:flex gap-5 items-center hidden">
          <Image src={Noti} width={20} height={20} alt="Notification" />
          <div className="flex gap-2 items-center">
            <h1 className="font-semibold">Kritika Bhardwaj</h1>
            <Image src={profile} height={40} width={30} alt="Profile" />
            <Image
              src={darrow}
              height={20}
              width={20}
              className="cursor-pointer"
              alt="Dropdown Arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
