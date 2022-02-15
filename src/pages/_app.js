import { createGlobalStyle } from "styled-components";

import Head from "next/head";

import Theme from "../components/Theme/Theme";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: hsl(0, 0%, 84%);
    font-family: 'Commissioner', sans-serif;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/favicon-32x32.png" />
      </Head>
      <GlobalStyle />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
