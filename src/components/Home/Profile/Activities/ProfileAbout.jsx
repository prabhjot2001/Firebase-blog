import React from "react";

const ProfileAbout = ({ getUserData }) => {
  return (
    <div className="w-full">
      <p>{getUserData?.bio || getUserData?.username + " has no bio"}</p>
      <div className="mt-8 text-right">
        <button className="border border-gray-600 rounded-full py-2 p-5 hover:bg-blue-600 hover:text-white hover:border-none">
          edit
        </button>
      </div>
    </div>
  );
};

export default ProfileAbout;
