import React, { useState, useEffect } from "react";

import {
  BackersContainer,
  BackersContainerInner,
  BackerTitle,
  BackerSub,
  ProgressBarContainer,
  ProgressBar,
} from "./Backers.elements";

import { Column } from "../util/util";

const Backers = ({ backed, totalBackers }) => {
  const [daysLeft, setDaysLeft] = useState(56);
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    let valor = backed
      .toLocaleString("en", { useGrouping: true })
      .split(",")[0]
      .toString();

    if (parseInt(valor) >= 100) {
      setProgressBar(100);
    } else {
      setProgressBar(valor);
    }
  }, [backed]);

  return (
    <BackersContainer>
      <BackersContainerInner>
        <div>
          <BackerTitle>
            {backed.toLocaleString("en", { useGrouping: true })}
          </BackerTitle>
          <>
            <BackerSub>of $100,000 backed</BackerSub>
          </>
        </div>

        <Column />

        <div>
          <BackerTitle>
            {totalBackers.toLocaleString("en", { useGrouping: true })}
          </BackerTitle>
          <>
            <BackerSub>total backers</BackerSub>
          </>
        </div>

        <Column />

        <div>
          <BackerTitle>{daysLeft} </BackerTitle>
          <>
            <BackerSub>days left</BackerSub>
          </>
        </div>
      </BackersContainerInner>

      <ProgressBarContainer>
        <ProgressBar progressBar={progressBar} />
      </ProgressBarContainer>
    </BackersContainer>
  );
};

export default Backers;
