import React from "react";

const Modal = ({ children,  hidden, modal, setModal }) => {
  return (
    <>
      <div
        
        className={`   bg-black/40 fixed inset-0 z-10 flex justify-center items-center ${hidden}`}>
        {children}  
      </div>
    </>
  );
};

export default Modal;
