import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Navigation from "../components/navigation"
import Welcome from "../components/welcome"
import About from "../components/about"
import Projects from "../components/projects"
import Footer from "../components/footer"
import FloatingButton from "../components/floatingButton"
import chevronSVG from "../components/chevronSVG"

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

    .no-scroll{
      overflow: hidden;
    }

    @media only screen and (min-width: 320px) {}

    @media only screen and (min-width: 480px) {}

    @media only screen and (min-width: 768px) {}

    @media only screen and (min-width: 1200px) {}
  }

  :root{
      --border-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1),
		0px 0px 0px 1px rgba(0, 0, 0, 0.15);
      --small-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15),
			0px 2px 4px -2px rgba(0, 0, 0, 0.4);
      --mid-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.15),
			0px 4px 8px -4px rgba(0, 0, 0, 0.5);
      --big-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.15),
			0px 8px 16px -8px rgba(0, 0, 0, 0.6);
    }

  // Light theme
  @media (prefers-color-scheme: light) {
    :root {
      --text: #333;
      --background: #fff;
      --mid-gray: #ccc;
      --footer-bg: #eee;
    }
  }

  // Dark theme
  @media (prefers-color-scheme: dark) {
    :root{
      --text: #ccc;
      --background: #222;
      --mid-gray: #666;
      --footer-bg: #111;
    }
  }

  ::selection{
    background-color: var(--mid-gray);
  }
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Container>
        <Welcome />
        <About />
        <Projects />
      </Container>
      <Footer />
      <FloatingButton Icon={chevronSVG} />
    </>
  )
}
