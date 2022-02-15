import React, { useState } from "react";

import {
  BackersOpContainer,
  BackersOpInnerContainer,
  Title,
  P,
} from "./BackersOptions.elements";

import { Pledge } from "../index";

const BackersOptions = ({ setShowModal }) => {
  const [bambooAmount, setBambooAmount] = useState(101);
  const [blackAmount, setBlackAmount] = useState(64);
  const [mahoganyAmount, setMahoganyAmount] = useState(0);

  let bambooText =
    "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.";

  let blackText =
    "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.";
  let mahoganyText =
    "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.";

  return (
    <BackersOpContainer>
      <BackersOpInnerContainer>
        <Title>About this project</Title>

        <P>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </P>

        <br />

        <P>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </P>

        <Pledge
          title="Bamboo Stand"
          valor="25"
          text={bambooText}
          amountLeft={bambooAmount}
          callbackAmount={setBambooAmount}
          setShowModal={setShowModal}
        />

        <Pledge
          title="Back Edition Stand"
          valor="75"
          text={blackText}
          amountLeft={blackAmount}
          callbackAmount={setBlackAmount}
          setShowModal={setShowModal}
        />

        <Pledge
          title="Mahogany Special Edition"
          valor="200"
          text={mahoganyText}
          amountLeft={mahoganyAmount}
          callbackAmount={setMahoganyAmount}
          setShowModal={setShowModal}
        />
      </BackersOpInnerContainer>
    </BackersOpContainer>
  );
};

export default BackersOptions;
