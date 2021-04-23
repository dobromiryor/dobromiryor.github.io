import React from "react"
import { createGlobalStyle } from "styled-components"

import Navigation from "../components/navigation"

const GlobalStyle = createGlobalStyle`
  html, body{
    margin: 0;
    padding: 0;
  }

  html{
    font-family: sans-serif;

    background-color: var(--background);
    color: var(--text);

    a{
      color: var(--text);
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {}

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {}

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {}

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {}

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {}
  }

  // Light theme
  @media (prefers-color-scheme: light) {
    :root {
      --text: #333;
      --background: #fff;
      --mid-gray: #808080;
    }
  }

  // Dark theme
  @media (prefers-color-scheme: dark) {
    :root{
      --text: #ccc;
      --background: #222;
      --mid-gray: #808080;
    }
  }
`

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      {/* Welcome */}
      {/* About */}
      {/* Projects */}
      {/* Contact */}
    </>
  )
}
