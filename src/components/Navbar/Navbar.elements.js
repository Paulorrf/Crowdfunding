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

export const NavLogo = styled.a`
  width: 9rem;

  @media (max-width: 900px) {
    width: 7rem;
  }

  @media (max-width: 760px) {
    width: 5rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 40%;
  //background-color: red;

  a {
    color: #fff;
    font-size: 1rem;
    padding: 1rem;

    > * {
      background-color: transparent;
    }

    :hover {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  }

  @media (max-width: 900px) {
    a {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 760px) {
    a {
      font-size: 0.6rem;
    }
  }
`;
