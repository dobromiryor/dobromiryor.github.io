import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const WelcomeContainer = styled.section`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100vh;
  min-height: 480px;

  padding: 16px;
`

const WavingHand = styled.span`
  position: absolute;
  animation: 2s ease-in-out infinite alternate wave;
  transform-origin: bottom left;

  @keyframes wave {
    0% {
      transform: rotate(0deg) translate(4px, -4px);
    }
    50% {
      transform: rotate(0deg) translate(4px, -4px);
    }
    75% {
      transform: rotate(30deg) translate(4px, -20px);
    }
    100% {
      transform: rotate(0deg) translate(4px, -4px);
    }
  }
`

const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  padding: 0;
  margin: 16px 0;

  list-style: none;

  a {
    text-decoration: none;
  }

  .link {
    position: relative;
    z-index: 2;

    padding: 2px;

    font-size: initial;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;

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
    }

    &:hover {
      &::before {
        bottom: 3px;

        height: 16px;
      }
    }
  }
`

export default function Welcome() {
  return (
    <WelcomeContainer id="welcome">
      <h1>
        Hello there
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <WavingHand role="img" aria-label="waving hand">
          👋
        </WavingHand>
      </h1>
      <h2>
        My name is <span>Dobromir Yordanov</span>
      </h2>
      <h3>I develop and design things for the web.</h3>
      <UnorderedList>
        <li>
          <Link to="/cv" className="link">
            CV
          </Link>
        </li>
        <li>
          <a href="mailto:dobromir.yor@gmail.com" className="link">
            Mail
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dobromiryor/" className="link">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/dobromiryor/" className="link">
            Github
          </a>
        </li>
        <li>
          <a href="https://codepen.io/dobromiryor/" className="link">
            CodePen
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/dobromir.yor/" className="link">
            Instagram
          </a>
        </li>
      </UnorderedList>
    </WelcomeContainer>
  )
}
