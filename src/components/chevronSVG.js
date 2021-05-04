import { AnchorLink } from "gatsby-plugin-anchor-links"
import React, { useEffect, useState } from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  svg{
    transform: translateY(0) rotate(0deg);
    transition: 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  .up{
    transform: translateY(0) rotate(180deg);
  }

`

export default function ExternalLinkSVG() {
  const [target, setTarget] = useState("/#about")

  useEffect(() => {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      let observer = new IntersectionObserver(
        entries => {
          if (document.querySelector("#navigation") !== null) {
            if (entries[0].isIntersecting) {
              document.querySelector("#chevron").classList.remove("up")
              setTarget("/#about")
            } else {
              document.querySelector("#chevron").classList.add("up")
              setTarget("/#welcome")
            }
          }
        },
        {
          rootMargin: "-96px 0px",
        }
      )
      observer.observe(document.querySelector("#welcome"))
    }
  }, [])

  return (
    <AnchorLink to={target}>
      <GlobalStyle />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 140 140"
        id="chevron"
      >
        <path d="M3.5 34.7a12 12 0 000 17l45.1 45.1 12.9 12.9a12 12 0 0017 0l12.9-12.9 45.1-45.1a12 12 0 000-17l-4.4-4.4a12 12 0 00-17 0L78.5 66.9a12 12 0 01-17 0L24.9 30.3a12 12 0 00-17 0l-4.4 4.4z" />
      </svg>
    </AnchorLink>
  )
}
