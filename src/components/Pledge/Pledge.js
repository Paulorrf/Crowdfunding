import React, { useState, useEffect } from "react";

import {
  Container,
  ContainerInner,
  ContainerOptions,
  PledgeValue,
  AboutText,
  P,
  SpanLeft,
  BtnReward,
} from "./Pledge.elements";

const Pledge = ({ title, valor, text, amountLeft, setShowModal }) => {
  const [isActive, setIsActive] = useState();
  const [disabled, setDisabled] = useState(false);
  const [outStock, setOutStock] = useState();

  useEffect(() => {
    if (amountLeft <= "0") {
      setIsActive(false);
      setDisabled(true);
      setOutStock(true);
    } else {
      setIsActive(true);
      setOutStock(false);
    }
  }, [amountLeft]);

  return (
    <Container isActive={isActive}>
      <ContainerInner>
        <ContainerOptions>
          <h2>{title}</h2>
          <PledgeValue>Pledge ${valor} or more</PledgeValue>
        </ContainerOptions>
        <AboutText>{text}</AboutText>
        <ContainerOptions>
          <P>
            {amountLeft} <SpanLeft>left</SpanLeft>
          </P>
          <BtnReward
            outStock={outStock}
            disabled={disabled}
            onClick={() => setShowModal(prev => !prev)}
          >
            {disabled ? "Out of stock" : "Select Reward"}
          </BtnReward>
        </ContainerOptions>
      </ContainerInner>
    </Container>
  );
};

export default Pledge;
