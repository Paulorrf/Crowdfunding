import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid ${({ theme: { colors } }) => colors.text};
  border-radius: 10px;
  margin-top: 32px;
  opacity: ${(props) => (props.isActive ? "1" : "0.5")};
`;

export const ContainerInner = styled.div`
  padding: 20px;
  width: 90%;
  margin: 0 auto;
`;

export const ContainerOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const PledgeValue = styled.p`
  color: ${({ theme: { colors } }) => colors.primary};
`;

export const AboutText = styled.p`
  padding: 10px 0;
`;

export const P = styled.p`
  color: #000;
  font-weight: bold;
  font-size: 1.4rem;
`;

export const SpanLeft = styled.span`
  color: ${({ theme: { colors } }) => colors.text};
  font-size: 0.8rem;
  margin-left: 4px;
`;

export const BtnReward = styled.button`
  //padding: 14px 20px;
  width: 140px;
  padding: 14px 0;
  background-color: ${(props) =>
    props.outStock
      ? ({ theme: { colors } }) => colors.text
      : ({ theme: { colors } }) => colors.primary};
  outline: none;
  border-radius: 20px;
  border: none;
  color: #fff;
  cursor: ${(props) => (props.outStock ? "default" : "pointer")};

  :hover {
    background-color: ${(props) =>
      props.outStock
        ? ({ theme: { colors } }) => colors.text
        : ({ theme: { colors } }) => colors.primary};
  }

  & {
    @media (max-width: 800px) {
      width: 100px;
      font-size: 10px;
    }
  }
`;
