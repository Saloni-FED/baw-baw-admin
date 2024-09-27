"use client"
import React from "react";
import logo from "../../public/Group.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const router = useRouter()
  const handleSubmit = (e)=>{
    e.preventDefault()
    router.push("/dashboard")
  }
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg w-3/4 mx-auto max-lg:w-full lg:pt-10 lg:px-20 lg:pb-32">
      {" "}
      {/* Adjusted width and centered */}
      <div className="flex justify-start mb-7">
        <Image
          src={logo}
          alt="Logo"
          width={200} // Adjust the width as per your requirement (in px)
          height={80} // Adjust the height as per your requirement (in px)
          className="h-20" // Optional, for further styling using Tailwind
        />
      </div>
      <h2 className="text-left text-lg text-baw-light-gray mb-5">
        Welcome back !!!
      </h2>
      <h1 className="text-left text-4xl font-bold mb-6">Sign in</h1>
      <form className="mt-10">
        <div className="mb-4">
          <label
            className="block text-black text-sm  mb-2 font-poppins"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 bg-baw-input rounded-sm text-gray-900 focus:outline-none focus:border-red-400"
            defaultValue="test1@gmail.com"
            required
          />
        </div>

        <div className="mb-6 font-poppins mt-10">
          <label
            className=" text-black text-sm  mb-2 font-poppins flex justify-between"
            htmlFor="password"
          >
            Password
            <a href="#" className="text-sm text-gray-500 ml-4">
              Forgot Password?
            </a>
          </label>
          <div className="flex justify-between items-center">
            <input
              type="password"
              id="password"
              className="w-full p-3 bg-baw-input rounded-sm text-gray-900 focus:outline-none focus:border-red-400"
              defaultValue="***********"
              required
            />
          </div>
        </div>
        <div className="w-full flex justify-center lg:mt-10">
          <button
            type="submit"
            className="w-full lg:w-fit lg:rounded-full  bg-baw-red text-white font-bold py-3 px-7 rounded-md flex justify-center items-center hover:bg-baw-yellow"
            onClick={handleSubmit}
          >
            <span>SIGN IN</span>
            <span className="ml-2">➔</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
