import { AnchorLink } from "gatsby-plugin-anchor-links"
import React from "react"
import styled from "styled-components"

const ConstantSpan = styled.span`
  transition: inherit;
`

const ExpandingSpan = styled.span`
  transition: inherit;
  opacity: 0;
  letter-spacing: -16px;
`
const StyledLogo = styled(AnchorLink)`
  padding: 4px;
  transition: 0.2s ease-in-out all;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  border: 2px solid var(--text);
  border-radius: 2px;
  line-height: 28px;

  &:hover ${ExpandingSpan}, &:focus ${ExpandingSpan} {
    opacity: 1;
    letter-spacing: initial;
  }
  @media only screen and (max-width: 375px) {
    &:hover
      ${ExpandingSpan},
      &:focus
      ${ExpandingSpan},
      &:hover
      ${ConstantSpan},
      &:focus
      ${ConstantSpan} {
      font-size: 1.2rem;
    }
  }
`

export default function Logo({ handleMenuClose }) {
  return (
    <StyledLogo
      to="/#welcome"
      title="Dobromir Yordanov"
      onAnchorLinkClick={handleMenuClose}
    >
      <ConstantSpan>d</ConstantSpan>
      <ExpandingSpan>obromir</ExpandingSpan>
      <ExpandingSpan> </ExpandingSpan>
      <ConstantSpan>y</ConstantSpan>
      <ExpandingSpan>ordanov</ExpandingSpan>
    </StyledLogo>
  )
}
