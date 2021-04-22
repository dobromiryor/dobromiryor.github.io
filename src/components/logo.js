import React from "react"
import styled from "styled-components"

const ConstantSpan = styled.span`
  transition: inherit;
`

const ExpandingSpan = styled.span`
  transition: inherit;
  opacity: 0;
  letter-spacing: -10px;
`
const StyledLogo = styled.div`
  padding: 2px;
  transition: 0.2s ease-in-out all;
  font-weight: 700;
  border: 2px solid var(--text);
  border-radius: 2px;
  cursor: default;

  &:hover ${ExpandingSpan} {
    opacity: 1;
    letter-spacing: initial;
  }
`

export default function Logo() {
  return (
    <StyledLogo title="Dobromir Yordanov">
      <ConstantSpan>d</ConstantSpan>
      <ExpandingSpan>obromir</ExpandingSpan>
      <ExpandingSpan> </ExpandingSpan>
      <ConstantSpan>y</ConstantSpan>
      <ExpandingSpan>ordanov</ExpandingSpan>
    </StyledLogo>
  )
}
