import React, { useState, useEffect } from "react";

import {
  Container,
  ContainerLabelQnt,
  LabelContainer,
  Title,
  InfoText,
  Line,
  PledgeContainer,
  BtnContinue,
  InputPledge,
} from "./ModalPledge.elements";

const ModalPledge = ({
  isFree,
  idFor,
  title,
  pledgeAmount = 0,
  quantity,
  arrIsActive,
  setArrIsActive,
  value,
}) => {
  //Must add a new indice to const "arrIsActive" with false for each modal
  const [isActiveModal, setIsActiveModal] = useState(true);
  const [outOfStock, setOutOfStock] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (quantity == 0 && isFree == false) {
      setOutOfStock(true);
      setIsActiveModal(false);
      setIsDisabled(true);
    }
  }, [isFree, quantity]);

  const handleClick = () => {
    const newArr = arrIsActive.map(valor => (valor = false));
    newArr[value] = true;
    setArrIsActive(newArr);
  };

  return (
    <Container isActiveModal={isActiveModal}>
      <div>
        {outOfStock ? (
          <div style={{ display: "flex", width: "100%" }}>
            <input
              type="radio"
              id={idFor}
              name="choose_pledge"
              style={{ width: "20px", height: "20px" }}
              disabled={isDisabled}
            />
            <ContainerLabelQnt>
              <LabelContainer>
                <label htmlFor={idFor}>
                  <Title isActiveModal={isActiveModal}>{title}</Title>
                </label>
                {isFree ? null : <p>Pledge ${pledgeAmount} or more</p>}
              </LabelContainer>
              <div>{isFree ? null : <p>{quantity} left</p>}</div>
            </ContainerLabelQnt>
          </div>
        ) : (
          <div
            style={{ display: "flex", width: "100%" }}
            onClick={() => handleClick()}
          >
            <input
              type="radio"
              id={idFor}
              name="choose_pledge"
              style={{ width: "20px", height: "20px" }}
            />
            <ContainerLabelQnt>
              <LabelContainer>
                <label htmlFor={idFor}>
                  <Title isActiveModal={isActiveModal}>{title}</Title>
                </label>
                {isFree ? null : <p>Pledge ${pledgeAmount} or more</p>}
              </LabelContainer>
              <div>{isFree ? null : <p>{quantity} left</p>}</div>
            </ContainerLabelQnt>
          </div>
        )}
        <InfoText>
          texto aleatorio texto aleatorio texto aleatorio texto aleatorio texto
          aleatorio texto aleatorio
        </InfoText>
      </div>

      {arrIsActive[value] ? (
        <div>
          <Line></Line>
          <PledgeContainer>
            <p>Enter your pledge</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    left: "22%",
                    position: "absolute",
                    top: "26%",
                  }}
                >
                  $
                </span>
                <InputPledge type="text" />
              </div>
              <BtnContinue>Continue</BtnContinue>
            </div>
          </PledgeContainer>
        </div>
      ) : null}
    </Container>
  );
};

export default ModalPledge;
