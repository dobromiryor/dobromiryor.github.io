import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const WelcomeContainer = styled.section`
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;

  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100vh;
  min-height: 480px;

  padding: 16px;

  .title {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 2rem;
  }

  #name {
    transition: 1s letter-spacing ease-in-out;
    letter-spacing: -0.02em;
    &:hover {
      letter-spacing: 0em;
    }
  }

  @media only screen and (max-width: 375px) {
    .title {
      font-size: 2rem;
    }
    .subtitle {
      font-size: 1.5rem;
    }
  }
`

const WavingHand = styled.span`
  position: absolute;
  animation: 2s ease-in-out infinite alternate wave;
  transform-origin: bottom right;
  font-weight: 100;

  @keyframes wave {
    0%,
    50%,
    100% {
      transform: rotate(0deg) translate(8px, 0);
    }
    75% {
      transform: rotate(30deg) translate(8px, -16px);
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
        bottom: 4px;

        height: 18px;
      }
    }
  }
`

export default function Welcome() {
  return (
    <WelcomeContainer id="welcome">
      <h1 className="title">
        <div>
          <span>Hello there</span>
          {/* eslint-disable jsx-a11y/accessible-emoji */}
          <WavingHand
            role="img"
            aria-hidden="true"
            aria-label="waving hand emoji"
          >
            👋
          </WavingHand>
        </div>
        <div>
          <span>I'm</span> <span id="name">Dobromir Yordanov</span>
        </div>
      </h1>
      <h2>I develop and design things for the web.</h2>
      <UnorderedList aria-label="social links">
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
          <a
            href="https://www.linkedin.com/in/dobromiryor/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dobromiryor/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/dobromiryor/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            CodePen
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/dobromir.yor/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </UnorderedList>
    </WelcomeContainer>
  )
}
