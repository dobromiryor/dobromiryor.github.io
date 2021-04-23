import React, { useState } from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Logo from "./logo"

const StyledHeader = styled.header`
  padding: 8px;
  display: flex;
  justify-content: space-between;
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  z-index: -1;
  opacity: ${props => (props.opened ? "0" : "1")};

  height: ${props => (props.opened ? "0" : "100%")};
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: ${props => (props.opened ? "none" : "initial")};

  transition: 0.2s ease-in-out;

  @media only screen and (min-width: 768px) {
    opacity: initial;
    width: initial;
    height: initial;
    position: initial;
    right: initial;
    top: initial;
    z-index: initial;
    transition: initial;
    transform: initial;
    pointer-events: initial;
  }
`

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

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
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  position: relative;
  padding: 4px;

  &::before {
    transition: 0.2s ease all;
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 4px;
    background-color: var(--mid-gray);
    z-index: -1;
  }

  &:hover {
    &::before {
      height: 32px;
      bottom: 6px;
    }
  }

  @media only screen and (min-width: 768px) {
    font-size: initial;
    margin: 0 4px;
    padding: 2px;
    &::before {
      height: 2px;
    }

    &:hover {
      &::before {
        height: 16px;
        bottom: 3px;
      }
    }
  }
`

const MenuButtonLine = styled.div`
  width: 24px;
  height: 2px;

  margin: 2px;

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
        ? "translateY(8px) rotate(45deg)"
        : "translateY(0) rotate(0deg)"};
  }
  ${MenuButtonLine}:nth-child(2) {
    transform: ${props => (props.shown ? "rotate(180deg)" : "rotate(0deg)")};
    opacity: ${props => (props.shown ? 0 : 1)};
  }
  ${MenuButtonLine}:nth-child(3) {
    transform: ${props =>
      props.shown
        ? "translateY(-8px) rotate(-45deg)"
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
  }

  return (
    <StyledHeader>
      <Logo handleMenuClose={handleMenuClose} />
      <>
        <StyledNav opened={menuOpened ? false : true}>
          <LinkList>
            <li>
              <StyledLink
                to="/#projects"
                title="Projects"
                onAnchorLinkClick={handleMenuClose}
              />
            </li>
            <li>
              <StyledLink
                to="/#about"
                title="About"
                onAnchorLinkClick={handleMenuClose}
              />
            </li>
            <li>
              <StyledLink
                to="/#contact"
                title="Contact"
                onAnchorLinkClick={handleMenuClose}
              />
            </li>
          </LinkList>
        </StyledNav>
        <MenuButton
          title="Menu"
          onClick={() => setMenuOpened(!menuOpened)}
          shown={menuOpened ? true : false}
        >
          <MenuButtonLine />
          <MenuButtonLine />
          <MenuButtonLine />
        </MenuButton>
      </>
    </StyledHeader>
  )
}
