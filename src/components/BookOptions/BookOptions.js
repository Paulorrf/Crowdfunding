import React, { useState } from "react";

import Image from "next/image";

import {
  BookProjDiv,
  Title,
  SubTitle,
  BtnBack,
  BookOp,
  P,
  Bookmark,
} from "./BookOptions.elements";

const BookOptions = ({ setShowModal }) => {
  const [booked, setBooked] = useState(false);

  return (
    <BookProjDiv>
      <Title>Mastercraft Bamboo Monitor Riser</Title>
      <SubTitle>
        A beautiful & handicraft monitor stand to reduce neck and eye strain.
      </SubTitle>
      <BookOp>
        <BtnBack onClick={() => setShowModal(prev => !prev)}>
          Back this project
        </BtnBack>
        {booked ? (
          <Bookmark onClick={() => setBooked(!booked)}>
            <Image
              src="/images/icon-check.svg"
              alt="booked"
              width="30"
              height="30"
            />
            <P>Bookmarked</P>
          </Bookmark>
        ) : (
          <Bookmark onClick={() => setBooked(!booked)}>
            <Image
              src="/images/icon-bookmark.svg"
              alt="unbooked"
              width="30"
              height="30"
            />
            <P>Bookmark</P>
          </Bookmark>
        )}
      </BookOp>
    </BookProjDiv>
  );
};

export default BookOptions;
