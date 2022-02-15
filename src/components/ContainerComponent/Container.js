import React, { useState } from "react";

import Image from "next/image";

import { BookOptions, Backers, BackersOptions, Modal } from "../index";

import { ContainerDiv, ImageContainer } from "./Container.elements";

const Container = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
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
        <Backers />
        <BackersOptions setShowModal={setShowModal} />
      </ContainerDiv>
    </>
  );
};

export default Container;
