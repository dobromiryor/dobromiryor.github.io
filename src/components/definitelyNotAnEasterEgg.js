import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import RockPaperScissors from "./rockPaperScissors"

const consoleMessage = `%c
  ┏━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃ Do                    ┃
  ┃    not                ┃
  ┃        touch          ┃
  ┃              my       ┃
  ┃                 photo ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━┛
`

const consoleStyle = `
  color: #ccc;
  text-shadow: 0px 0px 8px black;
`

const dialogue = [
  "You just had to do it.",
  "Are you THAT bored?",
  "Well, you're here now.",
  "Do you want to play a game of Rock, Paper, Scissors?",
  "Let's go!",
]

const Container = styled.div`
  position: relative;
`

const MessageContainer = styled.span`
  display: inline-block;
  position: absolute;
  left: calc(100% + 16px);
  top: calc(50% + 8px);
  padding: 8px;
  width: max-content;
  min-width: 64px;
  max-width: 208px;
  max-height: 48px;

  line-height: 20px;

  background-color: var(--background);
  border-radius: 0 8px 8px 8px;
  z-index: 5;
  transition: transform 0.2s, opacity 0.2s;
  box-shadow: var(--mid-shadow);

  transform: ${({ showMessage }) =>
    showMessage ? "translateX(0)" : "translateX(-16px)"};
  opacity: ${({ showMessage }) => (showMessage ? "1" : "0")};
  pointer-events: ${({ showMessage }) => (showMessage ? "default" : "none")};

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: -8px;
    width: 0;
    height: 0;
    border-top: 0px solid transparent;
    border-bottom: 16px solid transparent;
    border-right: 8px solid var(--background);
  }

  :hover {
    box-shadow: var(--mid-shadow);
  }
`

let timeout

export default function DefinitelyNotAnEasterEgg({
  running: gameRunning,
  setRunning: setGameRunning,
  finished: gameFinished,
  setFinished: setGameFinished,
}) {
  const [message, setMessage] = useState("")
  const [counter, setCounter] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  const talk = () => {
    if (!gameFinished) {
      setShowMessage(true)
      timeout = setTimeout(() => {
        setShowMessage(false)
      }, 2000)
      if (!gameRunning) {
        setMessage(dialogue[counter])
        setCounter(counter + 1)
      } else {
        setShowMessage(false)
      }
    }
  }

  const hideMessage = () => {
    setShowMessage(false)
    clearTimeout(timeout)
  }

  useEffect(() => {
    if (counter === dialogue.length && !gameRunning) {
      setGameRunning(true)
      setCounter(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, gameRunning])

  useEffect(() => {
    console.log(consoleMessage, consoleStyle)
  }, [])

  return (
    <Container onClick={showMessage ? hideMessage : talk}>
      <StaticImage
        src="../images/profile-image.jpg"
        alt="profile image"
        className="profile-image"
        placeholder="blurred"
        quality="50"
        layout="constrained"
        style={{
          width: 64,
          borderRadius: "100%",
          zIndex: 6,
        }}
      />
      <RockPaperScissors
        gameRunning={gameRunning}
        setGameRunning={setGameRunning}
        gameFinished={gameFinished}
        setGameFinished={setGameFinished}
      />
      <MessageContainer
        id="message"
        onClick={e => e.stopPropagation()}
        showMessage={showMessage}
      >
        {message}
      </MessageContainer>
    </Container>
  )
}
