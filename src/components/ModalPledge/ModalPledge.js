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
  arrIsActive,
  setArrIsActive,
  value,
  setShowModal,
  monitorsQnt,
  setMonitorsQnt,
  setBacked,
  setTotalBackers,
}) => {
  //Must add a new indice to const "arrIsActive" with false for each new modal
  const [isActiveModal, setIsActiveModal] = useState(true);
  const [outOfStock, setOutOfStock] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [pledgeValue, setPledgeValue] = useState(0);
  const [pledgeValueErr, setPledgeValueErr] = useState(false);

  //Out of stock
  useEffect(() => {
    if (monitorsQnt[value - 1] == 0 && isFree == false) {
      setOutOfStock(true);
      setIsActiveModal(false);
      setIsDisabled(true);
    }
  }, [isFree, monitorsQnt, value]);

  const handleClick = () => {
    const newArr = arrIsActive.map((valor) => (valor = false));
    newArr[value] = true;
    setArrIsActive(newArr);
  };

  let btnHandle = (e) => {
    e.preventDefault();

    if (pledgeValueErr) return;

    setBacked((prev) => prev + parseInt(pledgeValue));
    setTotalBackers((prev) => prev + 1);

    let newMonitor = monitorsQnt.map((monitor, index) => {
      if (index == value - 1) {
        return (monitor -= 1);
      } else {
        return monitor;
      }
    });

    setMonitorsQnt(newMonitor);
    setShowModal(false);
  };

  let handleChange = (value) => {
    //verify if value is equal or higher of the required pledge amount and is only numbers
    if (value < pledgeAmount || !value.match(/^[0-9]*$/)) {
      setPledgeValueErr(true);
      return;
    } else {
      setPledgeValueErr(false);
      setPledgeValue(value);
    }
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
              <div>{isFree ? null : <p>{monitorsQnt[value - 1]} left</p>}</div>
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
              <div>{isFree ? null : <p>{monitorsQnt[value - 1]} left</p>}</div>
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
                <InputPledge
                  type="text"
                  maxLength="5"
                  onChange={(e) => handleChange(e.target.value)}
                  pledgeValueErr={pledgeValueErr}
                />
              </div>
              <BtnContinue onClick={(e) => btnHandle(e)}>Continue</BtnContinue>
            </div>
          </PledgeContainer>
        </div>
      ) : null}
    </Container>
  );
};

export default ModalPledge;
