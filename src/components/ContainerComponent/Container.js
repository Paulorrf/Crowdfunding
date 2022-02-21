import React, { useState } from "react";

import Image from "next/image";

import { BookOptions, Backers, BackersOptions, Modal } from "../index";

import { ContainerDiv, ImageContainer } from "./Container.elements";

const Container = () => {
  const [showModal, setShowModal] = useState(false);

  //Modal.js and ModalPledge.js
  const [monitorsQnt, setMonitorsQnt] = useState([32, 15, 0]);

  //Backers.js
  const [backed, setBacked] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5008);

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        monitorsQnt={monitorsQnt}
        setMonitorsQnt={setMonitorsQnt}
        setBacked={setBacked}
        setTotalBackers={setTotalBackers}
      />
      <ContainerDiv>
        <ImageContainer>
          <Image
            src="/images/logo-mastercraft.svg"
            alt="mastercraft"
            width="30"
            height="30"
          />
        </ImageContainer>
        <BookOptions setShowModal={setShowModal} />
        <Backers backed={backed} totalBackers={totalBackers} />
        <BackersOptions setShowModal={setShowModal} monitorsQnt={monitorsQnt} />
      </ContainerDiv>
    </>
  );
};

export default Container;
