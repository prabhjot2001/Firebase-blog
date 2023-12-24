import React from "react";
import { useState, useEffect } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineBell } from "react-icons/ai";
import Search from "../Search";
import { IoIosArrowDown } from "react-icons/io";
import Modal from "../../../utils/Modal";
import UserModal from "./UserModal";
import { LuSearch } from "react-icons/lu";
import { Blog } from "../../../Context/Context";


const HomeHeader = () => {
  const [modal, setModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const hidden = `${
    modal ? "visible opacity-100" : "invisible opacity-0"
  } transition-all duration-400`;
  const [isActive, setIsActive] = useState(true);
  // **************useEffect will handle the scroll functionality **************
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
      <div className="size h-[60px] flex items-center justify-between">
        {/*--------------- left side ---------------*/}
        <div className="flex gap-4 items-center">
          <Link to="/" className="flex gap-4 items-center">
            <span>
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
            </span>
            <h1
              className={`font-bold text-gray-700 text-2xl ${
                isActive ? "text-gray-900" : "text-white"
              } sm:text-3xl`}
            >
              BlogRush
            </h1>
          </Link>
          <span className="hidden sm:table w-full">
            <Search/>
          </span>
        </div>

        {/*------------------ right side ------------------*/}
        <div
          className={`flex items-center gap-3 sm:gap-7 font-normal ${
            isActive ? "text-gray-900" : "text-white"
          } `}>

          {/* <span
            onClick={() => setSearchModal(true)}
            className="text-2xl text-gray-400 flex sm:hidden cursor-pointer z-10">
            <LuSearch />
          </span> */}

          <Link to="/write" className="hidden md:flex items-center gap-1 ">
            <span className="text-3xl">
              <FaRegPenToSquare />
            </span>
            <span className="text-sm mt-2">Start Writing</span>
          </Link>


          <span className="text-3xl  cursor-pointer">
            <AiOutlineBell />
          </span>

          <div className="flex items-center relative gap-3">
            <img onClick={() => setModal(true)}  src="/profile2.png" alt="profile image" className="h-[40px] w-[40px] border-2 object-cover cursor-pointer rounded-full border-gray-100" />
            <span className=" cursor-pointer" onClick={() => setModal(true)}>
              <IoIosArrowDown />
            </span>

            <div>
              <Modal modal={modal} setModal={setModal} hidden={hidden} />
              <div className={`${modal ? "visible opacity-100" : "invisible opacity-0"}`}>
                <UserModal modal={modal} setModal={setModal} />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="sm:hidden p-2">
        <Search/>
      </div>
    </header>
  );
};

export default HomeHeader;
