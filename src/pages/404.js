import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Navigation from "../components/navigation"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  /* margin-top: 72px; */
  padding: 0 16px;
`

const Graphic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: 5rem;
  font-weight: 800;
  transition: 0.2s ease-in-out;
  letter-spacing: -32px;
  transform: translateX(-16px);
  cursor: default;

  &:hover {
    letter-spacing: -24px;
  }

  span:nth-child(1) {
    font-size: 8rem;
    z-index: 1;
  }

  span:nth-child(2) {
    animation: 4s infinite alternate ease-in-out turn;
    position: relative;
    transform-origin: center;
    z-index: 2;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 20%;

      background: radial-gradient(
        circle,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 50%
      );
      width: 100%;
      height: 100%;

      animation: 4s infinite alternate ease-in-out rotatefade;
    }
  }

  span:nth-child(3) {
    font-size: 8rem;
    z-index: 3;
  }

  @keyframes turn {
    0% {
      transform: rotate3d(0, 1, 0, 30deg);
    }
    100% {
      transform: rotate3d(0, 1, 0, -30deg);
    }
  }

  @keyframes rotatefade {
    0% {
      opacity: 0.3;
      transform: translateX(32px);
    }
    50% {
      opacity: 0;
    }
    100% {
      transform: translateX(-32px);
      opacity: 0.3;
    }
  }
`

const TextBlock = styled.div`
  text-align: center;
`

const StyledLink = styled(Link)`
  position: relative;
  z-index: 2;

  padding: 2px;

  font-weight: 700;
  text-decoration: none;

  white-space: nowrap;

  &::before {
    position: absolute;
    left: 0;
    bottom: 0px;
    z-index: -1;

    width: 100%;
    height: 2px;

    background-color: var(--mid-gray);

    transition: 0.2s ease all;
    content: "";
    white-space: normal;
  }

  &:hover {
    &::before {
      bottom: 4px;

      height: 18px;
    }
  }
`

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <Container>
        <Graphic aria-label="404">
          <span>4</span>
          <span role="img" aria-label="thinking face">
            🤔
          </span>
          <span>4</span>
        </Graphic>
        <TextBlock>
          <h1>There's nothing here.</h1>
          <p>
            I'm not sure how you managed to get here but you can try going{" "}
            <StyledLink to="/">back</StyledLink>.
          </p>
        </TextBlock>
      </Container>
    </div>
  )
}
