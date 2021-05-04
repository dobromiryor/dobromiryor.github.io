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
  left: 0;
  top: 72px;

  display: flex;
  justify-content: center;
  height: ${props => (props.opened ? "0" : "calc(100vh - 72px)")};
  width: 100%;

  background-color: var(--background);

  pointer-events: ${props => (props.opened ? "none" : "initial")};
  opacity: ${props => (props.opened ? "0" : "1")};
  transition: 0.2s ease-in-out;

  @media only screen and (min-width: 768px) {
    position: initial;
    left: initial;
    top: initial;

    width: initial;
    height: initial;

    background-color: initial;

    transition: initial;
    opacity: initial;
    pointer-events: initial;
  }
`

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  list-style: none;

  & li {
    margin: 16px;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    & li {
      margin: 0;
    }
  }
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

      height: 32px;
    }
  }

  @media only screen and (min-width: 768px) {
    margin: 0 4px;
    padding: 2px;

    font-size: initial;

    &::before {
      height: 2px;
    }

    &:hover {
      &::before {
        bottom: 3px;

        height: 16px;
      }
    }
  }
`

const MenuButtonLine = styled.div`
  width: 36px;
  height: 2px;

  background-color: var(--text);

  transition: 0.2s ease-in-out all;
`

const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  cursor: pointer;

  &:hover ${MenuButtonLine} {
    background-color: var(--mid-gray);
  }

  ${MenuButtonLine}:nth-child(1) {
    transform: ${props =>
      props.shown
        ? "translateY(10.5px) rotate(45deg)"
        : "translateY(0) rotate(0deg)"};
  }
  ${MenuButtonLine}:nth-child(2) {
    opacity: ${props => (props.shown ? 0 : 1)};
    transform: ${props => (props.shown ? "rotate(45deg)" : "rotate(0deg)")};
  }
  ${MenuButtonLine}:nth-child(3) {
    transform: ${props =>
      props.shown
        ? "translateY(-10.5px) rotate(-45deg)"
        : "translateY(0) rotate(0deg)"};
  }

  @media only screen and (min-width: 768px) {
    display: none;
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
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
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
        }
      )
      observer.observe(document.querySelector("#welcome"))
    }
  }, [])

  return (
    <StyledHeader id="navigation">
      <Container>
        <Logo handleMenuClose={handleMenuClose} />
        <>
          <StyledNav opened={menuOpened ? false : true}>
            <LinkList>
              <li>
                <StyledLink
                  to="/#about"
                  title="About"
                  onAnchorLinkClick={handleMenuClose}
                />
              </li>
              <li>
                <StyledLink
                  to="/#projects"
                  title="Projects"
                  onAnchorLinkClick={handleMenuClose}
                />
              </li>
              <li>
                <StyledLink
                  to="/cv/"
                  title="CV"
                  onAnchorLinkClick={handleMenuClose}
                />
              </li>
            </LinkList>
          </StyledNav>
          <MenuButton
            title="Menu"
            onClick={handleMenuButton}
            shown={menuOpened ? true : false}
          >
            <MenuButtonLine />
            <MenuButtonLine />
            <MenuButtonLine />
          </MenuButton>
        </>
      </Container>
    </StyledHeader>
  )
}
