import React, { useState } from "react";
import Input from "../../../utils/Input";
import { IoChevronBack } from "react-icons/io5";
import { toast } from "react-toastify";
import { authentication, db } from "../../../fireBase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth'


const Signup = ({setSignReq, setModal }) => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username : '',
    email : '',
    password : '',
    repassword : ''
  })
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(form)
    if (form[('username','email','password', 'repassword')] === '')
    {
      toast.error("Please fill all the feilds")
    }

    else if(form['password'] !== form['repassword'])
    {
      toast.error('password are not matching')
      return;
    }
    else{
      setLoading(true)
      const {user} = await createUserWithEmailAndPassword(
        authentication,
        form.email,
        form.password);

        const ref = doc(db, "users", user.uid);
        const userDoc = await getDoc(ref);

        if(!userDoc.exists())
        {
          await setDoc(
            ref,{
              userId : user.uid,
              username : form.username,
              email : form.email,
              userImg : "",
              bio : ""
            }
          );
          navigate('/');
          toast.success("Successfully Registered");
          setLoading(false)
          setModal(false);
        }
    }
  }

  return (
    <div className=" text-center w-full small">
      <h2 className="font-bold text-gray-900 text-3xl mb-3">Sign Up</h2>
      <div className="flex gap-4 flex-col px-4">
        <p className="text-center mb-3 text-gray-600">
          Sign Up with your email and we'll send you a confirmation link.
        </p>
        <form action="" className="flex gap-4 flex-col " onSubmit={handleSubmit}>
          <Input form={form} setForm={setForm} type={"text"} title={"username"} />
          <Input form={form} setForm={setForm} type={"email"} title={"email"} />
          <Input form={form} setForm={setForm} type={"password"} title={"password"} />
          <Input form={form} setForm={setForm} type={"password"} title={"repassword"} />
          <button className={`bg-blue-600 p-2 font-medium text-white rounded-lg hover:bg-blue-700 ${loading? "opacity-50 pointer-events-none" : ""}`}>
            Sign Up
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

export default Signup;
