import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Logo from "./logo"

const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 16px;

  background-color: var(--background);
  box-shadow: none;

  transition: 0.5s ease-in-out;

  &.shadow {
    box-shadow: var(--big-shadow);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`

const StyledNav = styled.nav`
  position: absolute;
  top: 72px;
  right: ${props => (props["aria-expanded"] ? "0" : "-100vw")};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100vh - 72px);
  width: 100%;

  background-color: var(--background);

  pointer-events: ${props => (props["aria-expanded"] ? "initial" : "none")};
  opacity: ${props => (props["aria-expanded"] ? "1" : "0")};

  transition: 0.2s ease-in-out;
`

const StyledLink = styled(AnchorLink)`
  position: relative;
  z-index: 2;

  padding: 4px;

  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  &::before {
    position: absolute;
    left: 0;
    bottom: 0px;
    z-index: -1;

    width: 100%;
    height: 4px;

    background-color: var(--mid-gray);

    transition: 0.2s ease all;
    content: "";
  }

  &:hover {
    &::before {
      bottom: 6px;

      height: 36px;
    }
  }
`

const MenuButtonLine = styled.div`
  width: 40px;
  height: 2px;

  background-color: var(--text);

  transition: 0.2s ease-in-out all;
`

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  height: 40px;
  width: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  cursor: pointer;

  &:hover ${MenuButtonLine}, &:active ${MenuButtonLine} {
    background-color: var(--mid-gray);
  }

  ${MenuButtonLine}:nth-child(1) {
    transform: ${props =>
      props.open
        ? "translateY(10px) rotate(45deg)"
        : "translateY(0) rotate(0deg)"};
  }
  ${MenuButtonLine}:nth-child(2) {
    opacity: ${props => (props.open ? 0 : 1)};
    transform: ${props => (props.open ? "rotate(45deg)" : "rotate(0deg)")};
  }
  ${MenuButtonLine}:nth-child(3) {
    transform: ${props =>
      props.open
        ? "translateY(-10px) rotate(-45deg)"
        : "translateY(0) rotate(0deg)"};
  }
`

export default function Navigation() {
  const [menuOpened, setMenuOpened] = useState(false)

  const handleMenuClose = () => {
    setMenuOpened(false)
    document.querySelector("body").classList.remove("no-scroll")
  }

  const handleMenuButton = () => {
    if (menuOpened) {
      handleMenuClose()
    } else {
      setMenuOpened(true)
      document.querySelector("body").classList.add("no-scroll")
    }
  }

  useEffect(() => {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype &&
      document.querySelector("#welcome") !== null
    ) {
      let observer = new IntersectionObserver(
        entries => {
          if (document.querySelector("#navigation") !== null) {
            if (entries[0].isIntersecting) {
              document.querySelector("#navigation").classList.remove("shadow")
            } else {
              document.querySelector("#navigation").classList.add("shadow")
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
    <StyledHeader id="navigation">
      <Container>
        <Logo handleMenuClose={handleMenuClose} />
        <MenuButton
          title="Menu"
          onClick={handleMenuButton}
          open={!menuOpened ? false : true}
        >
          <MenuButtonLine />
          <MenuButtonLine />
          <MenuButtonLine />
        </MenuButton>
        <StyledNav aria-expanded={menuOpened} aria-hidden={!menuOpened}>
          <StyledLink
            to="/#projects"
            title="Projects"
            onAnchorLinkClick={handleMenuClose}
            gatsbyLinkProps={{
              tabIndex: menuOpened ? "0" : "-1",
            }}
          />
          <StyledLink
            to="/#about"
            title="About"
            onAnchorLinkClick={handleMenuClose}
            gatsbyLinkProps={{
              tabIndex: menuOpened ? "0" : "-1",
            }}
          />
          <StyledLink
            to="/cv/"
            title="CV"
            onAnchorLinkClick={handleMenuClose}
            gatsbyLinkProps={{
              tabIndex: menuOpened ? "0" : "-1",
            }}
          />
        </StyledNav>
      </Container>
    </StyledHeader>
  )
}
