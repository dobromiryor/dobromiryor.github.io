import React from "react"
import styled from "styled-components"

import homer from "../gifs/homer.gif"

const AboutContainer = styled.section`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const StyledLinkSpan = styled.span`
  position: relative;
  z-index: 2;

  padding: 2px;

  font-weight: 700;

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

  a {
    text-decoration: none;
  }

  #gif-container {
    position: relative;
  }
`

const Gif = styled.img`
  display: none;
  position: absolute;
  bottom: 24px;
  height: auto;
  width: 200%;

  ${StyledLinkSpan}#gif-container:hover & {
    display: block;
  }
`

export default function About() {
  const handleMouseMove = e => {
    let element = document.querySelector("#gif")
    let containerPos = document
      .querySelector("#gif-container")
      .getBoundingClientRect()
    let position = e.pageX - containerPos.x
    if (e.pageX + containerPos.width * 2 >= window.innerWidth - 16) {
      element.style.left = "auto"
      element.style.right = `${containerPos.width - position}px`
    } else {
      element.style.left = `${position}px`
      element.style.right = "auto"
    }
  }

  return (
    <AboutContainer id="about" className="invisible">
      <h2>About</h2>
      <p>
        Born in the 90s, I grew up in the years of the digital revolution. As a
        teenager I was spending more time on the computer, mostly in Photoshop
        and Illustrator or making themes for foobar2k. I became increasingly
        interested in technology and design. After graduating from Plovdiv
        University I saw front-end development as a good opportunity to combine
        both interests.
      </p>
      <p>
        <span>Outside of development, I'm interested in gaming, </span>
        <StyledLinkSpan>
          <a
            href="https://trakt.tv/users/dobromir-yor"
            target="_blank"
            rel="noreferrer"
          >
            films and TV shows
          </a>
        </StyledLinkSpan>
        <span>, different genres of </span>
        <StyledLinkSpan>
          <a
            href="https://www.last.fm/user/dobromiryor"
            target="_blank"
            rel="noreferrer"
          >
            music
          </a>
        </StyledLinkSpan>
        <span>, </span>
        <StyledLinkSpan>
          <a
            href="https://www.instagram.com/dobromir.yor/"
            target="_blank"
            rel="noreferrer"
          >
            photography
          </a>
        </StyledLinkSpan>
        <span> and cooking (let's be honest — </span>
        <StyledLinkSpan id="gif-container" onMouseMove={handleMouseMove}>
          mostly eating
          <Gif id="gif" src={homer} onMouseMove={e => e.stopPropagation()} />
        </StyledLinkSpan>
        ).
      </p>
      <p>
        I am currently looking for new opportunities so feel free to{" "}
        <StyledLinkSpan>
          <a
            href="mailto:dobromiryor@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            get in touch with me
          </a>
        </StyledLinkSpan>
        .
      </p>
    </AboutContainer>
  )
}
