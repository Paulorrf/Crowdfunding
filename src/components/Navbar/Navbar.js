import React from "react";

import Link from "next/link";

import Image from "next/image";

import logo from "/public/images/logo.svg";

import { Header, Nav, NavList, NavLogo } from "./Navbar.elements";

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <>
          <Link href="/">
            <NavLogo>
              <Image src={logo} alt="logo" />
            </NavLogo>
          </Link>
        </>
        <NavList>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Discover</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Get Started</a>
            </Link>
          </li>
        </NavList>
      </Nav>
    </Header>
  );
};

export default Navbar;
