import React, { useEffect, useState } from "react"
import styled from "styled-components"

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 4px;
  position: absolute;
  box-sizing: border-box;
  padding: 16px;
  min-width: calc(280px - 32px);
  height: 128px;
  top: calc(-128px - 8px);
  left: 0px;
  background-color: var(--background);
  box-shadow: var(--border-shadow);
  border-radius: 8px;
  transition: 0.2s ease-in-out;
  transform: translateY(32px);
  opacity: 0;

  &:hover {
    box-shadow: var(--big-shadow);
  }

  &.disabled {
    pointer-events: none;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  height: 48px;

  :nth-child(1) > div {
    flex-grow: 1;
    flex-basis: 0;
  }
`

const StyledButton = styled.button`
  padding: 0;
  background-color: var(--background);
  color: var(--color);
  border: 0;
  border-radius: 100px;
  cursor: pointer;
`

const EmojiContainer = styled.span`
  font-size: 32px;
  pointer-events: none;
`

export default function RockPaperScissors({
  gameFinished,
  gameRunning,
  setGameFinished,
  setGameRunning,
}) {
  const [userPick, setUserPick] = useState("")
  const [userPickEmoji, setUserPickEmoji] = useState("")
  const [computerPick, setComputerPick] = useState("")
  const [computerPickEmoji, setComputerPickEmoji] = useState("")
  const [message, setMessage] = useState("Pick your shape")
  const [computerScore, setComputerScore] = useState(0)
  const [userScore, setUserScore] = useState(0)

  const newPick = () => {
    const shapes = ["rock", "paper", "scissors"]
    setComputerPick(shapes[Math.floor(Math.random() * 3)])
    setUserPick("")
    setMessage("Pick your shape")
  }

  const runGameLogic = () => {
    if (userPick === "rock" && computerPick === "scissors") {
      setUserScore(userScore + 1)
    } else if (userPick === "rock" && computerPick === "paper") {
      setComputerScore(computerScore + 1)
    } else if (userPick === "paper" && computerPick === "rock") {
      setUserScore(userScore + 1)
    } else if (userPick === "paper" && computerPick === "scissors") {
      setComputerScore(computerScore + 1)
    } else if (userPick === "scissors" && computerPick === "paper") {
      setUserScore(userScore + 1)
    } else if (userPick === "scissors" && computerPick === "rock") {
      setComputerScore(computerScore + 1)
    }
    newPick()
  }

  const handleUserPick = e => {
    setUserPick(e.target.id)
  }

  useEffect(() => {
    if (userScore === 3) {
      setMessage("You won!")
      setGameRunning(false)
      setGameFinished(true)
    } else if (computerScore === 3) {
      setMessage("You lost!")
      setGameRunning(false)
      setGameFinished(true)
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [userScore, computerScore])

  useEffect(() => {
    if (userPick) {
      if (userPick === "rock") {
        setUserPickEmoji("✊")
      } else if (userPick === "paper") {
        setUserPickEmoji("✋")
      } else if (userPick === "scissors") {
        setUserPickEmoji("✌")
      }
      if (computerPick === "rock") {
        setComputerPickEmoji("✊")
      } else if (computerPick === "paper") {
        setComputerPickEmoji("✋")
      } else if (computerPick === "scissors") {
        setComputerPickEmoji("✌")
      }
      runGameLogic()
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [userPick])

  useEffect(() => {
    if (gameRunning) {
      newPick()
      document.querySelector("#game-container").classList.remove("hidden")
    } else if (gameFinished) {
      document.querySelector("#game-container").classList.add("disabled")
      window.setTimeout(
        () =>
          document
            .querySelector("#game-container")
            .classList.remove("float-in"),
        3000
      )
      window.setTimeout(
        () => document.querySelector("#game-container").classList.add("hidden"),
        3500
      )
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [gameRunning, gameFinished])

  return (
    <GameContainer
      id="game-container"
      className="hidden float-in"
      onClick={e => e.stopPropagation()}
    >
      <Row>
        <Row>
          <div>{computerScore}</div>
          <div>-</div>
          <div>{userScore}</div>
        </Row>
        <Row>
          <StyledButton id="rock" onClick={handleUserPick}>
            {/* eslint-disable jsx-a11y/accessible-emoji */}
            <EmojiContainer role="img" className="rock" aria-label="rock">
              ✊
            </EmojiContainer>
          </StyledButton>
          <StyledButton id="paper" onClick={handleUserPick}>
            {/* eslint-disable jsx-a11y/accessible-emoji */}
            <EmojiContainer role="img" className="paper" aria-label="paper">
              ✋
            </EmojiContainer>
          </StyledButton>
          <StyledButton id="scissors" onClick={handleUserPick}>
            {/* eslint-disable jsx-a11y/accessible-emoji */}
            <EmojiContainer role="img" aria-label="scissors">
              ✌
            </EmojiContainer>
          </StyledButton>
        </Row>
      </Row>
      <Row>
        <EmojiContainer role="img" aria-label={computerPick}>
          {computerPickEmoji}
        </EmojiContainer>
        <div>{message}</div>
        <EmojiContainer role="img" aria-label={userPick}>
          {userPickEmoji}
        </EmojiContainer>
      </Row>
    </GameContainer>
  )
}
