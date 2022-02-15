import styled from "styled-components";

export const Header = styled.header`
  min-height: 20rem;
  background-image: url("/images/image-hero-desktop.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 2rem 0 2rem;
  background-color: transparent;

  //adding top shadow inside the div
  box-shadow: inset 0 30px 80px 0 #000;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0 1rem 0;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 24%;

  a {
    color: #fff;

    > * {
      background-color: transparent;
    }

    :hover {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  }
`;
