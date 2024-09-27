import React from "react";
import Image from "next/image";
import shape from "../../public/Shape.png";
import dog from "../../public/dog.png";
import SignInForm from "./SignInForm";

const Signin = () => {
  return (
    <div className="flex h-screen max-lg:flex-col">
      {/* Use h-screen to make the parent full height */}
      <div className="basis-1/2 flex-1 border-2 bg-baw-yellow relative flex flex-col items-center h-full">
        {/* Set flex-col to arrange items vertically */}
        {/* Container for both images */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 mt-4">
          {/* Dog Image */}
          <Image
            src={dog}
            alt="Dog Image" // Provide a descriptive alt text
            width={400} // Set width according to your design (smaller value)
            height={200} // Set height according to your design (smaller value)
            className="object-contain" // Ensures the image retains its aspect ratio
          />
        </div>
        <div className="flex flex-col ">
          {/* Shape Image */}
          <Image
            src={shape}
            alt="Decorative Shape" // Provide a descriptive alt text
            width={420} // Set width according to your design (smaller value)
            height={420} // Set height according to your design (smaller value)
            className="object-contain" // Ensures the image retains its aspect ratio
          />
        </div>
      </div>
      <div className="md:basis-1/2 flex-1 border-2 flex justify-center items-center h-full max-lg:w-full">
        <SignInForm/>
      </div>
    </div>
  );
};

export default Signin;
