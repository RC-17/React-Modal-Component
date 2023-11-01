import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Modal = ({ setToggleModal }) => {
  return (
    <div className="ModalBg">
      <div className="ModalContainer">
        {/* X icon */}
        <FontAwesomeIcon icon={faXmark} onClick={setToggleModal} />
        <div className="ModalSuccess">
          <FontAwesomeIcon icon={faCheck} /> {/* tick icon */}
        </div>
        <h2>Payment Successful</h2>
        <p>Your oder is on the way : ) </p>
      </div>
    </div>
  );
};

export default Modal;
