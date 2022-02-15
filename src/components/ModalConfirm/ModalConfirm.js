import React from "react";

const ModalConfirm = () => {
  const modalContent = (
    <div>
      <h2>Modal confirm</h2>
    </div>
  );

  return ReactDom.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default ModalConfirm;
