import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { LuLibrary } from "react-icons/lu";
import { MdOutlineWebStories } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb"
import { Blog } from '../../../Context/Context'
import { Link } from 'react-router-dom';
import { FaRegPenToSquare } from "react-icons/fa6";
import { hiddenEmail } from '../../../utils/helper';

const UserModal = ({setModal, modal}) => {
    const {currentUser} = Blog()
    const userModal = [
        {
            title : "Profile",
            icon : <FaRegUser />,
            path : `/profile/${currentUser?.Uid}`
        },
        {
            title : "Library",
            icon : <LuLibrary />,
            path : "/library"
        },
        {
            title : "Stories",
            icon : <MdOutlineWebStories />,
            path : "/stories"
        },
        {
            title : "Stats",
            icon : <FaChartPie />,
            path : "/stats"
        },
        
    ]
  return (
    <section className='absolute w-[23rem] p-6 bg-white right-0 top-[100%] shadows rounded-md z-50 text-gray-700'>
        <RxCross1 onClick={()=>setModal(false)}  className='absolute rounded-sm p-[2px] text-xl right-3 top-3 cursor-pointer hover:bg-gray-200' />
        <h2 className='text-gray-600 font-bold text-2xl mb-4 text-center'>Hi {currentUser.displayName} 👋 </h2>
        <Link
            to="/write"
            className="flex md:hidden items-center gap-4 text-gray-500 mb-5"
          >
            <span className="text-2xl ">
                <FaRegPenToSquare />
            </span>
            <span className="text-md mt-2 ">Start Writing</span>
          </Link>
          <div className='flex flex-col gap-6 border-b border-gray-400 pb-5'>
            {userModal.map((item, i)=>(
                <Link className='flex items-center gap-4 text-gray-500 hover:ml-5 transition-all duration-200' path={item.path} key={i}>
                    <span className='text-2xl '>{item.icon}</span>
                    <h2 className='text-md'>{item.title}</h2>
                </Link>
            ))}
          </div>

        <button className='flex items-center gap-3 justify-center bg-blue-600 text-white rounded-md p-2 w-full mt-3 mb-3 hover:bg-blue-500 '>
            <TbLogout2 />Logout</button>
            <span>You are currently logged in as <span className='text-blue-700'>{hiddenEmail(currentUser?.email)}</span></span>
    </section>
  )
}

export default UserModal