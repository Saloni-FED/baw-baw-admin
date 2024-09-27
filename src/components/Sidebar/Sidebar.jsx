"use client";
import React, { useState, useContext } from "react";
import {
  FaHome,
  FaUsers,
  FaShoppingCart,
  FaTicketAlt,
  FaQuestionCircle,
  FaFileAlt,
  FaTags,
  FaCog,
  FaSignOutAlt,
  FaTimes,
  FaBars, // Add menu bar icon
} from "react-icons/fa"; // Import icons from react-icons
import { MyContext } from "@/context/MyContext";

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(MyContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar open/close
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button for mobile view */}

      {/* Sidebar */}
      <div
        className={`w-64 h-full shadow-lg bg-white fixed top-0 left-0 z-40 transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:relative lg:block`}
      >
        <div className="p-4 h-full overflow-y-auto sidebar-scrollbar">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={toggleSidebar}>
              {/* <FaHome className="h-6 w-6 text-baw-text" /> */}
              <FaTimes className="block lg:hidden h-6 w-6 text-baw-text" />
            </div>

            <div className="space-y-1 mb-12">
              <SidebarLink Icon={FaHome} label="Dashboard" />
              <SidebarLink Icon={FaUsers} label="Vendors" />
              <SidebarLink Icon={FaUsers} label="Service Providers" />
              <SidebarLink Icon={FaUsers} label="Users" />
              <SidebarLink Icon={FaShoppingCart} label="Orders" />
              <SidebarLink Icon={FaTicketAlt} label="Bookings" />
            </div>
          </div>

          {/* Help Desk */}
          <div className="mb-6">
            <div className="bg-baw-baw-g4 text-white px-3 py-2 rounded-md font-semibold baw-text">
              Help Desk
            </div>
            <div className="space-y-2 mt-4 mb-12">
              <SidebarLink Icon={FaQuestionCircle} label="User Helpdesk" />
              <SidebarLink Icon={FaQuestionCircle} label="Vendor Help desk" />
              <SidebarLink Icon={FaFileAlt} label="Contact" />
            </div>
          </div>

          {/* Admin */}
          <div className="mb-6">
            <div className="bg-baw-baw-g4 text-white px-3 py-2 rounded-md font-semibold baw-text">
              Admin
            </div>
            <div className="space-y-2 mt-4">
              <SidebarLink Icon={FaTags} label="Coupons" />
              <SidebarLink Icon={FaUsers} label="Team" />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="bg-baw-baw-g4 text-white px-3 py-2 rounded-md font-semibold baw-text">
              Content
            </div>
            <div className="space-y-2 mt-4">
              <SidebarLink Icon={FaFileAlt} label="Blogs" />
              <SidebarLink Icon={FaFileAlt} label="Graphics" />
              <SidebarLink Icon={FaFileAlt} label="Categories" />
              <SidebarLink Icon={FaTags} label="Tags" />
              <SidebarLink Icon={FaFileAlt} label="Media" />
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="p-4">
            <SidebarLink Icon={FaCog} label="Settings" />
            <SidebarLink Icon={FaSignOutAlt} label="Logout" />
          </div>
        </div>
      </div>

      {/* Overlay for mobile view to close the sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

const SidebarLink = ({ Icon, label }) => (
  <div className="flex items-center space-x-2 baw-text hover:bg-baw-baw-g6 px-2 py-2 rounded-md cursor-pointer">
    <Icon className="h-5 w-5 text-baw-text" />
    <span className="text-baw-text">{label}</span>
  </div>
);

export default Sidebar;
