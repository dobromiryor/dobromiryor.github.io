import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import RockPaperScissors from "./rockPaperScissors"

const consoleMessage = `
╭━━━━━━━━━━━━━━━━━━━━━━━╮
│ Do                    │
│    not                │
│        touch          │
│              my       │
│                 photo │
╰━━━━━━━━━━━━━━━━━━━━━━━╯
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

const MessageContainer = styled.div`
  position: absolute;
  left: calc(100% + 16px);
  top: calc(50% + 8px);
  padding: 8px;
  width: 142px;

  line-height: 16px;

  background-color: var(--background);
  border-radius: 0 8px 8px 8px;
  z-index: 5;
  transition: 0.2s ease-in-out;
  box-shadow: var(--mid-shadow);

  transform: translateX(-16px);
  opacity: 0;

  pointer-events: none;

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

  &.float-right {
    opacity: 1;
    transform: translateX(0);
  }
`

export default function DefinitelyNotAnEasterEgg() {
  const [message, setMessage] = useState("")
  const [counter, setCounter] = useState(0)
  const [gameRunning, setGameRunning] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)

  let messageTimer

  const talk = () => {
    clearTimeout(messageTimer)
    if (!gameFinished) {
      document.querySelector("#message").classList.add("float-right")
      messageTimer = setTimeout(() => {
        document.querySelector("#message").classList.remove("float-right")
      }, 2000)
      if (!gameRunning) {
        setMessage(dialogue[counter])
        setCounter(counter + 1)
      }
    }
  }

  useEffect(() => {
    if (counter === dialogue.length && !gameRunning) {
      setGameRunning(true)
      setCounter(0)
    }
  }, [counter, gameRunning])

  useEffect(() => {
    if (gameFinished) {
      setTimeout(() => {
        document.querySelector("#message").classList.add("hidden")
      }, 500)
    }
  }, [gameFinished])

  useEffect(() => {
    console.log(consoleMessage)
  }, [])

  return (
    <Container onClick={talk}>
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
      <MessageContainer id="message" onClick={e => e.stopPropagation()}>
        {message}
      </MessageContainer>
    </Container>
  )
}
