import styled from "styled-components";

export const BackersOpContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
`;

export const BackersOpInnerContainer = styled.div`
  width: 90%;
  padding: 10px;
  margin: 0 auto;

  & {
    @media (max-width: 800px) {
      font-size: 0.6rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  padding: 10px 0;
`;

export const P = styled.p`
  font-size: 0.9rem;
  padding-top: 10px;

  & {
    @media (max-width: 800px) {
      font-size: 0.6rem;
    }
  }
`;
