import React, { useState } from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Logo from "./logo"

const StyledHeader = styled.header`
  padding: 8px;
  display: flex;
  justify-content: space-between;
`

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
  li {
  }
`

const StyledLink = styled(AnchorLink)`
  margin: 0 4px;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
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
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${MenuButtonLine}:nth-child(1) {
    transform: ${props =>
      props.opened
        ? "translateY(6px) rotate(45deg)"
        : "translateY(0) rotate(0deg)"};
  }
  ${MenuButtonLine}:nth-child(2) {
    transform: ${props => (props.opened ? "rotate(180deg)" : "rotate(0deg)")};
    opacity: ${props => (props.opened ? 0 : 1)};
  }
  ${MenuButtonLine}:nth-child(3) {
    transform: ${props =>
      props.opened
        ? "translateY(-6px) rotate(-45deg)"
        : "translateY(0) rotate(0deg)"};
  }
`

export default function Navigation() {
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <StyledHeader>
      <Logo />
      <>
        <MenuButton
          onClick={() => setMenuOpened(!menuOpened)}
          opened={menuOpened ? true : false}
        >
          <MenuButtonLine />
          <MenuButtonLine />
          <MenuButtonLine />
        </MenuButton>
        <nav>
          <LinkList>
            <StyledLink to="/#projects" title="Projects" />
            <StyledLink to="/#about" title="About" />
            <StyledLink to="/#contact" title="Contact" />
          </LinkList>
        </nav>
      </>
    </StyledHeader>
  )
}
