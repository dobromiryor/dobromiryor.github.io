import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import DefinitelyNotAnEasterEgg from "./definitelyNotAnEasterEgg"

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: var(--footer-bg);
  box-shadow: var(--mid-shadow);
  transition: 0.2s ease-in-out;
  width: 100%;

  &:hover {
    box-shadow: var(--big-shadow);
  }
`

const Profile = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: unset;
  width: 100%;
  max-width: 960px;
  padding: 16px;
  margin: 0 auto;

  #profile {
    display: flex;
    align-items: center;
    gap: 16px;

    .profile-image {
      :hover {
        cursor: grab;
      }
      :active {
        cursor: grabbing;
      }
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  padding: 0;
  margin: 0;

  list-style: none;

  a {
    text-decoration: none;
  }

  .link {
    position: relative;
    z-index: 2;

    padding: 2px;

    font-size: 12px;
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

export default function Footer() {
  return (
    <StyledFooter id="footer">
      <Profile>
        <div id="profile" aria-label="profile">
          <DefinitelyNotAnEasterEgg />
          <TextContainer>
            <h4>Dobromir Yordanov</h4>
            <UnorderedList aria-label="social links">
              <li>
                <a href="mailto:dobromir.yor@gmail.com" className="link">
                  Mail
                </a>
              </li>
              <li>
                <Link to="/cv" className="link">
                  CV
                </Link>
              </li>
            </UnorderedList>
          </TextContainer>
        </div>
        <div>
          <UnorderedList aria-label="social links">
            <li>
              <a
                href="https://www.linkedin.com/in/dobromiryor/"
                className="link"
              >
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
              <a
                href="https://www.instagram.com/dobromir.yor/"
                className="link"
              >
                Instagram
              </a>
            </li>
          </UnorderedList>
        </div>
      </Profile>
    </StyledFooter>
  )
}
