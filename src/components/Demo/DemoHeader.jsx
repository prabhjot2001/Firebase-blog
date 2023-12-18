import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data.js";
import Auth from "./Auth/Auth.jsx";

const DemoHeader = () => {
  const [modal, setModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scrollMe);
  }, []);
  return (
    <header
      className={`border-b border-black sticky top-0 z-20
    ${isActive ? "bg-white" : "bg-banner"}
    transition-all duration-500`}
    >
      <div className="size h-[70px] flex items-center justify-between ">
        <Link to="/" className="flex gap-[10px]">
          <svg
            id="logo-35"
            width="50"
            height="39"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
              class="ccompli1"
              fill="#007AFF"
            ></path>{" "}
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              class="ccustom"
              fill="#312ECB"
            ></path>{" "}
          </svg>
          <h1
            className={`font-bold text-gray-700 text-3xl ${
              isActive ? "text-gray-900" : "text-white"
            }`}
          >
            BlogRush
          </h1>
        </Link>

        <div
          className={`flex items-center gap-5 ${
            isActive ? "text-gray-900" : "text-white"
          }`}
        >
          <div
            className={`hidden text-sm sm:flex items-center gap-5 
            }`}
          >
            {nav.map((link, i) => (
              <Link key={i} to={link.path}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className="relative">
            <button
              onClick={() => setModal(true)}
              className={`hidden text-sm sm:flex items-center gap-5 ${
                isActive ? "text-gray-900" : "text-white"
              }`}
            >
              Login
            </button>
            <Auth setModal={setModal} modal={modal} />
          </div>
          <button
            onClick={() => setModal(true)}
            className={`text-white rounded-md px-3 p-2 font-medium ${
              isActive ? "bg-blue-700" : "bg-blue-700"
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
