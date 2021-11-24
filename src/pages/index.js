import React, { useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"

import "../styles/global.css"

import Navigation from "../components/navigation"
import Welcome from "../components/welcome"
import About from "../components/about"
import Projects from "../components/projects"
import Footer from "../components/footer"

import FloatingButton from "../components/floatingButton"
import chevronSVG from "../components/chevronSVG"

import faviconSVG from "../../static/favicon.svg"
import favicon from "../../static/favicon.ico"
import bannerImage from "../../static/banner.png"

const GlobalStyle = createGlobalStyle`
  p {
    cursor: default;
  }

  .no-scroll {
    overflow: hidden;
  }

  .hidden {
    display: none;
  }

  .invisible {
    transition: 0.2s ease-in-out;
    transform: translateY(16px);
    opacity: 0;
  }

  .float-in {
    transition: 0.2s ease-in-out;
    transform: translateY(0px);
    opacity: 1;
  }
`

const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
`

export default function Home() {
  useEffect(() => {
    let threshold = []
    for (let i = 1; i < 20; i++) {
      threshold.push(parseFloat(0.05 * i).toFixed(2))
    }
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      let observer = new IntersectionObserver(
        entries => {
          if (entries[0].target.id === "about") {
            if (entries[0].intersectionRatio > 0.5) {
              document.querySelector("#about").classList.add("float-in")
              document.querySelector("#about").classList.remove("invisible")
              observer.unobserve(entries[0].target)
            }
          }
          if (entries[0].target.id === "projects") {
            if (entries[0].intersectionRatio > 0.15) {
              document.querySelector("#projects").classList.add("float-in")
              document.querySelector("#projects").classList.remove("invisible")
              observer.unobserve(entries[0].target)
            }
          }
        },
        { threshold: threshold, rootMargin: "0px" }
      )
      observer.observe(document.querySelector("#about"))
      observer.observe(document.querySelector("#projects"))
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <link rel="icon" type="image/svg+xml" href={faviconSVG} />
        <link rel="alternative icon" href={favicon} />
        <meta
          name="description"
          content="Hello there! I'm Dobromir Yordanov, a front-end developer based in Plovdiv, BG."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Dobromir Yordanov | Front-end Developer"
        />
        <meta
          property="og:site_name"
          content="Dobromir Yordanov | Front-end Developer"
        />
        <meta
          property="og:description"
          content="Hello there! I'm Dobromir Yordanov, a front-end developer based in Plovdiv, BG."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dobromiryor.github.io/" />
        <meta property="og:image" content={bannerImage} />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content="Dobromir Yordanov | Front-end Developer"
        />
        <meta
          property="twitter:description"
          content="Hello there! I'm Dobromir Yordanov, a front-end developer based in Plovdiv, BG."
        />
        <meta property="twitter:image" content={bannerImage} />
        <meta property="twitter:creator" content="@dobromiryor" />
        <meta name="theme-color" content="#222222" />
        <meta name="color-scheme" content="light dark" />
        <title>Dobromir Yordanov | Front-end Developer</title>
      </Helmet>
      <Navigation />
      <Container>
        <Welcome />
        <FloatingButton Icon={chevronSVG} />
        <Projects />
        <About />
      </Container>
      <Footer />
    </>
  )
}
