import React from "react";
import Input from "../../../utils/Input";
import { IoChevronBack } from "react-icons/io5";

const Signin = ({setSignReq}) => {
  return (
    <div className=" text-center w-full small">
      <h2 className="font-bold text-gray-900 text-3xl mb-3">Sign In</h2>
      <div className="flex gap-4 flex-col px-4">
        <p className="text-center mb-3 text-gray-600">
          Sign In with your email here
        </p>
        <form action="" className="flex gap-4 flex-col ">
          <Input type={"email"} title={"Email"} />
          <Input type={"password"} title={"Password"} />
          <button className="bg-blue-600 p-2 font-medium text-white rounded-lg hover:bg-blue-700">
            Sign In
          </button>
        </form>
        <hr className="border-gray-300"/>
        <button onClick={()=>{setSignReq("")}} className="flex items-center justify-evenly text-blue-700">
          <IoChevronBack /> Continue with other services?
        </button>
      </div>
    </div>
  );
};

export default Signin;
