import styled from "styled-components";

export const BookProjDiv = styled.div`
  padding-top: 20px;
  text-align: center;
  padding: 24px 50px 20px 50px;
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    h2 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 760px) {
    h2 {
      font-size: 0.7rem;
    }

    p {
      font-size: 0.6rem;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  padding: 4px;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  padding: 4px;
`;

export const BtnBack = styled.button`
  width: 140px;
  padding: 10px;
  border-radius: 20px;
  border-color: transparent;
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: #fff;
  cursor: pointer;

  :hover {
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }

  @media (max-width: 900px) {
    & {
      width: 100px;
      font-size: 10px;
    }
  }

  @media (max-width: 760px) {
    & {
      width: 86px;
      font-size: 8px;
    }
  }
`;

export const Bookmark = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BookOp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
`;

export const P = styled.p`
  padding-left: 10px;
`;
