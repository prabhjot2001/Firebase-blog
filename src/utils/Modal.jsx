import React from "react";

const Modal = ({ children,  hidden, modal, setModal }) => {
  return (
    <>
      <div onClick={()=>setModal(false)}
        className={`${modal ? 'bg-black/30 fixed inset-0 z-10 flex justify-center items-center ${hidden}': null}`}>
        {children}  
      </div>
    </>
  );
};

export default Modal;
