import React, { useState } from "react";
import ProfileHome from "./Activities/ProfileHome";
import ProfileAbout from "./Activities/ProfileAbout";
import ProfileLists from "./Activities/ProfileLists";
import Modal from "../../../utils/Modal";
import { GoSidebarExpand } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { MdEdit } from "react-icons/md";


const Profile = () => {
  const activities = [
    {
      title: "Home",
      component: ProfileHome,
    },
    {
      title: "Lists",
      component: ProfileLists,
    },
    {
      title: "About",
      component: ProfileAbout,
    },
  ];
  const [currentAcitivity, setCurrentActivity] = useState(activities[0]);
  const [modal, setModal] = useState(false);
  return (
    <section className="size flex gap-[4rem] relative">
      {/* left section */}
      <div className="mt-[9rem] flex-[2] ">
        <div className="flex items-end gap-4 ">
          <h2 className="font-semibold text-3xl sm:text-4xl">Prabhjot</h2>
          <p className="text-gray-500 text-xs sm:text-sm">followers(189M)</p>
          <p className="text-gray-500 text-xs sm:text-sm">following(1)</p>
        </div>
        {/* ---listing all the tabs here--- */}
        <div className="flex items-center gap-5 mt-3 border-b border-gray-400 mb-5">
          {activities.map((item, i) => (
            <div
              className={`py-1 ${
                item.title === currentAcitivity.title
                  ? "border-b-2 border-blue-700"
                  : "null"
              }`}
            >
              <button onClick={() => setCurrentActivity(item)}>
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <div>
          <currentAcitivity.component />
        </div>
        <button className="fixed top-30 right-0 text-2xl text-gray-900 md:hidden"><GoSidebarExpand onClick={()=>setModal(true)}/></button>
      </div>

      {/* right section  */}
      <Modal
        modal={modal}
        setModal={setModal}
        onClick={() => setModal(false)}
      >
</Modal>

      <div
        className={`flex-1 p-5 z-20 fixed right-0 bottom-0 top-0 w-[18rem] bg-white md:relative md:z-10 ${
            modal ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"
        } transition-all duration-300`}
        >
        <div className="pb-4 text-right">
          <button
            className="inline-block md:hidden"
            onClick={() => setModal(false)}
            >
            <RxCross2 />
          </button>
        </div>
        {/* profile */}
        <div className="sticky top-[7] flex flex-col justify-between gap-3">
          <img
            src="/profile2.png"
            alt=""
            className="h-10 w-10 object-cover rounded-full"
            />
          <h2 className="font-semibold text-xl">Prabhjot singh</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className=" bg-blue-600 max-w-max py-2 px-5 text-white rounded-md flex gap-3 items-center">
            {" "}
            edit profile <MdEdit />
          </button>
        </div>
      </div>
            
    </section>
  );
};

export default Profile;
