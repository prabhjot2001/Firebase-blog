import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col bg-[#ffffff]  rounded-md items-center justify-center">
      <img src="/4043.gif" alt="" className="w-[400px] h-[300px]" />
      {/* <video src="/404v1.mp4" loop autoPlay muted className="w-[500px] h-[400px]"></video> */}
      <h1 className="font-bold text-4xl text-gray-900">Oops!</h1>
      <h1 className="font-bold text-3xl text-gray-900">404 Page Not Found</h1>
      <Link to="/" className=' px-[20px] py-[10px] bg-blue-800 mt-[40px] text-white'>Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
