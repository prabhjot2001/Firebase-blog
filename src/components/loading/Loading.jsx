import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center flex-col gap-8 backdrop-blur-sm z-30">
      <img src="/kitten.gif" alt="loading" className="w-[150px] h-[150px]" />
      <h2 className="font-medium text-4xl text-blue-700">Loading...</h2>
    </div>
  );
};

export default Loading;
