import styled from "styled-components";

export const BackersContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 6px;
  margin-bottom: 20px;
`;

export const BackersContainerInner = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const BackerTitle = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  padding-bottom: 6px;

  & {
    @media (max-width: 1000px) {
      font-size: 1rem;
    }
  }

  & {
    @media (max-width: 750px) {
      //font-size: 1rem;
    }
  }
`;

export const BackerSub = styled.p`
  color: ${({ theme: { colors } }) => colors.text};

  & {
    @media (max-width: 1000px) {
      font-size: 0.6rem;
    }
  }

  & {
    @media (max-width: 750px) {
      font-size: 0.5rem;
    }
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 20px;
  background-color: hsl(0, 0%, 84%);
  margin-top: 30px;
  margin: 1rem auto;

  & {
    @media (max-width: 1000px) {
      margin: 0.4rem auto;
    }
  }

  & {
    @media (max-width: 750px) {
      margin: 0.1rem auto;
    }
  }
`;

export const ProgressBar = styled.div`
  //width: 89%;
  width: ${({ progressBar }) => progressBar}%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: 20px;
`;
