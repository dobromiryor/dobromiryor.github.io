import React from "react"
import styled from "styled-components"

const StyledFloatingButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 32px;
  right: 32px;
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

  a {
    width: 33%;
  }

  svg {
    fill: var(--text);
  }
`

export default function FloatingButton({ Icon }) {
  return (
    <StyledFloatingButton>
      <Icon />
    </StyledFloatingButton>
  )
}
