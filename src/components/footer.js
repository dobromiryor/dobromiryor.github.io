import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
  display: flex;
  flex-direction: column;
  max-width: 960px;
  padding: 16px;
  margin: 0 auto;

  & > div {
    display: flex;
    align-items: center;
    gap: 32px;
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

export default function Footer() {
  return (
    <StyledFooter id="footer">
      <Profile>
        <div id="profile">
          <StaticImage
            src="../images/profile-image.jpg"
            alt=""
            placeholder="blurred"
            quality="50"
            layout="constrained"
            style={{
              width: "calc(15% - 16px)",
              minWidth: 64,
              maxWidth: 128,
              borderRadius: "100%",
            }}
          />
          <div>
            <h3>Dobromir Yordanov</h3>
            <UnorderedList>
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
          </div>
        </div>
        <div>
          <UnorderedList>
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
