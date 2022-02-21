import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 8px;
  padding: 12px;
  margin-top: 16px;
  margin-bottom: 16px;
  opacity: ${(props) => (props.isActiveModal ? "1" : "0.5")};

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

export const ContainerLabelQnt = styled.div`
  width: 94%;
  display: flex;
  justify-content: space-between;

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

export const LabelContainer = styled.div`
  display: flex;
`;

export const Title = styled.p`
  padding-left: 8px;
  padding-right: 20px;
  font-weight: 700;
  cursor: ${({ isActiveModal }) => (isActiveModal ? "pointer" : "default")};

  :hover {
    color: ${({ isActiveModal }) =>
      isActiveModal ? ({ theme: { colors } }) => colors.primary : "000"};
  }
`;

export const InfoText = styled.p`
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${({ theme: { colors } }) => colors.text};
`;

export const Line = styled.div`
  width: calc(100% + 24px);
  height: 1px;
  background-color: ${({ theme: { colors } }) => colors.text};
  margin-bottom: 10px;
  margin-left: -12px;
`;

export const PledgeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
  align-items: center;

  p {
    color: ${({ theme: { colors } }) => colors.text};
  }
`;

export const BtnContinue = styled.button`
  width: 100px;
  padding: 12px 20px;
  border-radius: 24px;
  border-color: transparent;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  color: #fff;
  margin-left: 16px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const InputPledge = styled.input`
  border-radius: 24px;
  width: 100px;
  text-align: center;
  outline: none;
  border-style: solid;
  padding: 10px 0;
  border-color: ${({ pledgeValueErr, theme }) =>
    pledgeValueErr ? "red" : theme.colors.secondary};
`;
