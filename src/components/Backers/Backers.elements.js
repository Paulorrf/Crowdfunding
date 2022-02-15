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
`;

export const BackerSub = styled.p`
  color: ${({ theme: { colors } }) => colors.text};
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 20px;
  background-color: hsl(0, 0%, 84%);
  margin-top: 30px;
`;

export const ProgressBar = styled.div`
  width: 89%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: 20px;
`;
