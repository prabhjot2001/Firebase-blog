import React from "react";
import { discover, discoverActions } from "../../data";


const Discover = () => {
  return (
    <div className="sticky top-[6rem]">
      <div className="border-b border-gray-400 pb-7">
        <h2 className="text-gray-900 font-medium mb-5">Discover more of what relates to you</h2>
        <div className="my-2 flex items-center gap-3 flex-wrap">
          {discover.map((item, i) => (
            <button key={i} className="bg-gray-200 py-2 px-4 text-sm text-gray-900 rounded-full">{item}</button>
          ))}
        </div>
        <button className='py-2 px-4 rounded-full text-white bg-blue-700'>Discover more</button>
      </div>
      <div className="flex flex-wrap gap-3 items-center mt-5">
        {discoverActions.map((item,i)=>(<button className="text-gray-700 font-normal  pb-[2px]  border-gray-500 hover:text-blue-800 hover:border-b-[2px] hover:pb-0" key={i}>{item}</button>))}
      </div>
    </div>
  );
};

export default Discover;
