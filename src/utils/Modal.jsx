import React from "react";

const Modal = ({ children, modal, setModal, hidden }) => {
  return (
    <>
      <div
        // onClick={() => setModal(false)}
        className={`bg-black/50 fixed inset-0 z-10 flex justify-center items-center ${hidden}`}>

        {children}
        
      </div>
    </>
  );
};

export default Modal;