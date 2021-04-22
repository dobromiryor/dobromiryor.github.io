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
      position: relative;
      padding: 2px;

      &::before{
        transition: 0.2s ease all;
        content: '';
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 100%;
        height: 2px;
        background-color: var(--link-decoration);
        z-index: -1;
      }

      &:hover{
        &::before{
          height: 16px;
          bottom: 3px;
        }
      }
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
      --link-decoration: #808080;
      --background: #fff;
    }
  }

  // Dark theme
  @media (prefers-color-scheme: dark) {
    :root{
      --text: #ccc;
      --link-decoration: #808080;
      --background: #222;
    }
  }
`

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      {/* Welcome */}
      {/* Projects */}
      {/* About */}
      {/* Contact */}
    </>
  )
}
