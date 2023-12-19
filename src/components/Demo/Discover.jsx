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
        <button className='py-2 px-4 rounded-full text-gray-800 border-double border-4 border-green-600 hover:text-black hover:border-blue-600'>Discover more</button>
      </div>
      <div className="flex flex-wrap gap-3 items-center mt-5">
        {discoverActions.map((item,i)=>(<button className="text-gray-700 font-normal border-b-2 border-green-600 hover:text-green-600" key={i}>{item}</button>))}
      </div>
    </div>
  );
};

export default Discover;
