import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const StyledFloatingButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 24px;
  right: 24px;
  height: 48px;
  width: 48px;

  border-radius: 100%;
  box-shadow: var(--border-shadow);
  background-color: var(--background);
  color: var(--text);
  z-index: 5;
  transition: 0.2s ease-in-out;

  :hover {
    box-shadow: var(--mid-shadow);
  }

  svg {
    width: 33%;
    fill: var(--text);
  }
`

export default function FloatingButton({ Icon }) {
  const [target, setTarget] = useState("/#projects")
  const [label, setLabel] = useState("Scroll down to projects")

  useEffect(() => {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      let observer = new IntersectionObserver(
        entries => {
          if (document.querySelector("#chevron") !== null) {
            if (entries[0].isIntersecting) {
              document.querySelector("#chevron").classList.remove("up")
              setTarget("/#projects")
              setLabel("Scroll down to projects")
            } else {
              document.querySelector("#chevron").classList.add("up")
              setTarget("/#welcome")
              setLabel("Scroll to top")
            }
          }
        },
        {
          rootMargin: "-96px 0px",
          threshold: 0.25,
        }
      )
      observer.observe(document.querySelector("#welcome"))
    }
  }, [])
  return (
    <AnchorLink to={target}>
      <StyledFloatingButton aria-label={label}>
        <Icon />
      </StyledFloatingButton>
    </AnchorLink>
  )
}
