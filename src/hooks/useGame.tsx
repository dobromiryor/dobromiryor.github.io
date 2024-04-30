import { useContext, useEffect, useState } from "react";

import { Sign3D } from "../components/3D/Sign3D";
import { GameSide } from "../enums/game-side.enum";
import { GameSign } from "../enums/game-sign.enum";
import { GameState } from "../enums/game-state.enum";
import { GameContext } from "../providers/game-provider";

const BEST_OF = 3;

export const useGame = () => {
	const [signs, setSigns] = useState<JSX.Element[]>([]);
	const context = useContext(GameContext);
	const {
		computerPoints,
		playerPoints,
		setComputerPoints,
		setPlayerPoints,
		setState,
		setWinner,
		state,
	} = context ?? {};

	if (context === undefined) {
		throw new Error("useGame must be used within a GameProvider");
	}

	const addSign = (sign: GameSign) => {
		if (setComputerPoints != null && setPlayerPoints != null) {
			const computerSign = getRandomSign();
			const roundWinner = getRoundWinner(sign, computerSign);

			switch (roundWinner) {
				case GameSide.COMPUTER:
					setComputerPoints((prev) => prev + 1);
					break;
				case GameSide.PLAYER:
					setPlayerPoints((prev) => prev + 1);
					break;
			}

			setSigns((prev) => [
				...prev,
				<Sign3D
					key={`Sign__${sign}__${GameSide.PLAYER}__${prev.length + 1}__${Date.now()}`}
					side={GameSide.PLAYER}
					sign={sign}
					winner={roundWinner === GameSide.PLAYER}
				/>,
				<Sign3D
					key={`Sign__${sign}__${GameSide.COMPUTER}__${prev.length + 1}__${Date.now()}`}
					side={GameSide.COMPUTER}
					sign={computerSign}
					winner={roundWinner === GameSide.COMPUTER}
				/>,
			]);
		}
	};

	const getRandomSign = () => {
		const signsLength = Object.keys(GameSign).length;
		const randomSignsKey = Math.floor(Math.random() * signsLength);

		return Object.values(GameSign)[randomSignsKey];
	};

	const getRoundWinner = (userSign: GameSign, computerSign: GameSign) => {
		switch (userSign) {
			case computerSign:
				return null;
			case GameSign.ROCK:
				if (computerSign === GameSign.SCISSORS) {
					return GameSide.PLAYER;
				} else {
					return GameSide.COMPUTER;
				}

			case GameSign.PAPER:
				if (computerSign === GameSign.ROCK) {
					return GameSide.PLAYER;
				} else {
					return GameSide.COMPUTER;
				}

			case GameSign.SCISSORS:
				if (computerSign === GameSign.PAPER) {
					return GameSide.PLAYER;
				} else {
					return GameSide.COMPUTER;
				}
		}
	};

	useEffect(() => {
		if (
			playerPoints != null &&
			computerPoints != null &&
			setWinner != null &&
			setState != null
		) {
			const playerWins = playerPoints === BEST_OF && computerPoints < BEST_OF;
			const computerWins = computerPoints === BEST_OF && playerPoints < BEST_OF;

			if (playerWins) {
				setWinner(GameSide.PLAYER);
			}

			if (computerWins) {
				setWinner(GameSide.COMPUTER);
			}

			const finishGame = () => {
				if (playerWins || computerWins) {
					setState(GameState.FINISHED);
				}
			};

			const timeout = setTimeout(finishGame, 3000);

			return () => clearTimeout(timeout);
		}
	}, [computerPoints, playerPoints, setState, setWinner]);

	useEffect(() => {
		if (state === GameState.FINISHED) {
			const cleanup = () => setSigns([]);

			const timeout = setTimeout(cleanup, 10000);

			return () => clearTimeout(timeout);
		}
	}, [state]);

	useEffect(() => {
		const limit = 10;

		if (signs.length > limit) {
			setSigns((prev) => {
				prev.splice(0, prev.length - limit);

				return prev;
			});
		}
	}, [signs.length]);

	return {
		...context,
		addSign,
		getRandomSign,
		getRoundWinner,
		signs,
	};
};
