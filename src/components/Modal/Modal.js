import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

import ModalPledge from "../ModalPledge/ModalPledge";

import {
  Background,
  OuterModal,
  ModalWrapper,
  CloseBtn,
  BtnContainer,
  InfoContainer,
} from "./Modal.elements";

const Modal = ({
  showModal,
  setShowModal,
  monitorsQnt,
  setMonitorsQnt,
  setBacked,
  setTotalBackers,
}) => {
  //Each value is for each ModalPledge
  const [arrIsActive, setArrIsActive] = useState([false, false, false, false]);

  const [isBrowser, setIsBrowser] = useState(false);

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      setArrIsActive(arrIsActive.map((valor) => (valor = false)));
    }
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = showModal ? (
    <Background onClick={closeModal} ref={modalRef}>
      <OuterModal>
        <ModalWrapper>
          <BtnContainer>
            <CloseBtn size={24} onClick={() => setShowModal((prev) => !prev)} />
          </BtnContainer>

          <InfoContainer>
            <h2>Back this project</h2>
            <p>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
          </InfoContainer>

          <form>
            <ModalPledge
              isFree={true}
              idFor={"no-reward"}
              title={"Pledge with no reward"}
              pledgeAmount={0}
              arrIsActive={arrIsActive}
              setArrIsActive={setArrIsActive}
              value={0}
              setShowModal={setShowModal}
              monitorsQnt={monitorsQnt}
              setMonitorsQnt={setMonitorsQnt}
              setBacked={setBacked}
              setTotalBackers={setTotalBackers}
            />
            <ModalPledge
              isFree={false}
              idFor={"bamboo-stand"}
              title={"Bamboo Stand"}
              pledgeAmount={25}
              arrIsActive={arrIsActive}
              setArrIsActive={setArrIsActive}
              value={1}
              setShowModal={setShowModal}
              monitorsQnt={monitorsQnt}
              setMonitorsQnt={setMonitorsQnt}
              setBacked={setBacked}
              setTotalBackers={setTotalBackers}
            />
            <ModalPledge
              isFree={false}
              idFor={"black-edition"}
              title={"Black Edition Stand"}
              pledgeAmount={75}
              arrIsActive={arrIsActive}
              setArrIsActive={setArrIsActive}
              value={2}
              setShowModal={setShowModal}
              monitorsQnt={monitorsQnt}
              setMonitorsQnt={setMonitorsQnt}
              setBacked={setBacked}
              setTotalBackers={setTotalBackers}
            />
            <ModalPledge
              isFree={false}
              idFor={"mahogany-edition"}
              title={"Mahogany Special Edition"}
              pledgeAmount={200}
              arrIsActive={arrIsActive}
              setArrIsActive={setArrIsActive}
              value={3}
              setShowModal={setShowModal}
              monitorsQnt={monitorsQnt}
              setMonitorsQnt={setMonitorsQnt}
              setBacked={setBacked}
              setTotalBackers={setTotalBackers}
            />
          </form>
        </ModalWrapper>
      </OuterModal>
    </Background>
  ) : null;

  if (isBrowser) {
    return ReactDom.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
