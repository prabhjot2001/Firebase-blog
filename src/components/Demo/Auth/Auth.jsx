import React, { useState } from "react";
import Modal from "../../../utils/Modal";
// ***************************  react-icons  ***************************
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import Signin from "./Signin";
import Signup from "./Signup";
// *************************  comming from firebase  *************************
import {signInWithPopup} from 'firebase/auth'
import {authentication, authProvider, db} from '../../../fireBase/firebase'
import {doc, getDoc, setDoc} from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Auth = ({ modal, setModal }) => {

  const hidden = `${  modal ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-400`;
  const [userExists, setUserExists] = useState(false);
  const [SignReq, setSignReq] = useState("");
  const navigate = useNavigate();

  //************************* implementing google authentication with google firebase and firebaseAuth *************************
  const googleAuth = async ()=>{
     try{
          const createUser = await signInWithPopup(authentication, authProvider)
          const newUser = createUser.user;
          const ref = doc(db, "users", newUser.uid);

          const userDoc = await getDoc(ref);

          if(!userDoc.exists()){
            await setDoc(ref, {
                 userId : newUser.uid,
                 username : newUser.displayName,
                 email : newUser.email,
                 userImg : newUser.photoURL,
                 bio : "",
            });
            navigate('/')
            toast.success("Successfully Signed In")
            setModal(false)
          }
     }
     catch(err){
      toast.error(err.message)
     }
  }

  return (
    <Modal setModal={setModal} modal={modal} hidden={hidden}>
      <section
        className={`z-99 fixed w-[400px] max-h-full rounded-2xl p-8 bg-white text-black small ${hidden}`}
      >
        {/*------------ Close button ------------ */}
        <button
          onClick={()=>{setModal(false); setSignReq("");}}
          className="absolute top-5 left-5 hover:bg-gray-300 rounded-md p-1"
        >
          <LiaTimesSolid />
        </button>

        <div className="flex flex-col items-center justify-center gap-5">
          {SignReq === "" ? (
            <>
              <h2 className="font-bold text-gray-900 text-3xl">
                {userExists ? "Welcome Back!" : "Join Us"}
              </h2>

              <div className=" w-full flex flex-col gap-3">
                <p className="text-center mb-3 text-gray-600">
                  Use your email or another services to continue with BlogRush.
                </p>

                <Button
                  click={googleAuth}
                  icon={<FcGoogle className="text-2xl" />}
                  text={`${userExists ? "Sign In" : "Sign Up"} with Google`}
                  color={"bg-gray-100"}
                  textColor={"text-gray-800"}
                />
                <Button
                  icon={
                    <BiLogoFacebookCircle className="text-2xl text-blue-700" />
                  }
                  text={`${userExists ? "Sign In" : "Sign Up"} with Facebook`}
                  color={"bg-gray-100"}
                  textColor={"text-gray-800"}
                />
                <Button
                  click={() => {
                    setSignReq(userExists ? "sign-in" : "sign-up");
                  }}
                  icon={<MdMailOutline className="text-2xl" />}
                  text={` ${userExists ? "Sign In" : "Sign Up"} with email`}
                  color={"bg-blue-600"}
                  textColor={"text-white"}
                />
              </div>

              <p>
                {userExists ? "Don't have an account?" : "Already a member!"}
                <button
                  className="text-green-700 hover:text-green-900 font-bold ml-1"
                  onClick={() => setUserExists(!userExists)}
                >
                  {userExists ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </>
          ) : SignReq === "sign-in" ? (
            <Signin setModal={setModal} setSignReq={setSignReq} />
          ) : SignReq === "sign-up" ? (
            <Signup setModal={setModal} setSignReq={setSignReq} />
          ) : null}

          <p className="text-center text-sm text-gray-500">
            By continuing, you agree to our{" "}
            <span className="font-medium hover:text-blue-600">
              Terms & Conditions
            </span>
            . Read Our{" "}
            <span className="font-medium hover:text-blue-600">
              Privacy Policy
            </span>
          </p>
        </div>
      </section>
    </Modal>
  );
};

export default Auth;

const Button = ({ icon, text, color, textColor, click }) => {
  return (
    <button
      onClick={click}
      className={`flex items-center gap-10 w-full px-5 py-3 rounded-xl font-medium ${color} ${textColor}`}
    >
      {icon} {text}
    </button>
  );
};
