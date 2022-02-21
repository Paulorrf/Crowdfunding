import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

//Used to make round borders with the scroll bar inside
export const OuterModal = styled.div`
  width: 700px;
  height: auto;
  border-radius: 15px;
  padding: 6px 0px;
  background: #fff;

  & {
    @media (max-width: 800px) {
      width: 500px;
    }
  }
`;

export const ModalWrapper = styled.div`
  width: 696px;
  height: 600px;
  z-index: 100;
  overflow-y: auto;
  overflow-x: hidden;

  & {
    @media (max-width: 800px) {
      width: 500px;
    }
  }
`;

export const CloseBtn = styled(AiOutlineClose)`
  color: 000;
  margin-right: 16px;
  margin-top: 10px;
  cursor: pointer;

  :hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  text-align: right;
`;

export const InfoContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  h2 {
    padding-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme: { colors } }) => colors.text};
    padding-bottom: 16px;
  }

  & {
    @media (max-width: 800px) {
      h2 {
        font-size: 0.9rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`;
