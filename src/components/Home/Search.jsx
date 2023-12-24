import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import Modal from "../../utils/Modal";


const Search = () => {
    // const hidden = `${ searchModal ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-400`;
  return (
    <>
      {/* <Modal/> */}
      <div className={`relative sm:relative sm:right-4  sm:left-0 sm:top-0 `}>

        <div className="flex items-center gap-2 bg-gray-100 px-2 rounded-full relative">
          <input type="text" placeholder={`Search`}  className="p-2 bg-transparent outline-none text-sm w-full z-10"/>
          <span>
            <LuSearch className="text-2xl text-gray-400"/>
          </span>
        </div>
      </div>
    </>
  );
};

export default Search;
