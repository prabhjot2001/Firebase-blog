import React, { useState } from "react";
import Input from "../../../utils/Input";
import { IoChevronBack } from "react-icons/io5";
import { doc } from "firebase/firestore";
import { authentication, db } from "../../../fireBase/firebase";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signin = ({ setSignReq }) => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);

    if (form.email === "" || form.password === "") {
      toast.error("Please fill all the feilds");
    }
    try {
      setLoading(true)
      await signInWithEmailAndPassword(authentication, form.email, form.password);
      navigate('/')
      toast.success("Successfully Registered");
      setLoading(false)
    } catch (err) {
      toast.error(err);
      setLoading(false);
    }
  };

  return (
    <div className=" text-center w-full small">
      <h2 className="font-bold text-gray-900 text-3xl mb-3">Sign In</h2>
      <div className="flex gap-4 flex-col px-4">
        <p className="text-center mb-3 text-gray-600">
          Sign In with your email here
        </p>
        <form
          action=""
          className="flex gap-4 flex-col "
          onSubmit={handleSubmit}
        >
          <Input type={"email"} title={"email"} form={form} setForm={setForm} />
          <Input
            type={"password"}
            title={"password"}
            form={form}
            setForm={setForm}
          />
          <button className={`bg-blue-600 p-2 font-medium text-white rounded-lg hover:bg-blue-700
          ${loading? "opacity-50 pointer-events-none" : ""}`}>
            Sign In
          </button>
        </form>

        <hr className="border-gray-300" />
        <button
          onClick={() => {
            setSignReq("");
          }}
          className="flex items-center justify-evenly text-blue-700"
        >
          <IoChevronBack /> Continue with other services?
        </button>
      </div>
    </div>
  );
};

export default Signin;
