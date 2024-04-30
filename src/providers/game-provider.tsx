import {
	createContext,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from "react";

import { type GameSide } from "../enums/game-side.enum";
import { GameState } from "../enums/game-state.enum";

type Winner = GameSide | null;

type GameContextType = {
	state: GameState;
	setState: Dispatch<SetStateAction<GameState>>;
	playerPoints: number;
	setPlayerPoints: Dispatch<SetStateAction<number>>;
	computerPoints: number;
	setComputerPoints: Dispatch<SetStateAction<number>>;
	winner: Winner;
	setWinner: Dispatch<SetStateAction<Winner>>;
};

export const GameContext = createContext<GameContextType | undefined>(
	undefined
);

interface GameProviderProps {
	children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
	const [state, setState] = useState<GameState>(GameState.INITIAL);
	const [winner, setWinner] = useState<Winner>(null);
	const [playerPoints, setPlayerPoints] = useState<number>(0);
	const [computerPoints, setComputerPoints] = useState<number>(0);

	return (
		<GameContext.Provider
			value={{
				state,
				setState,
				playerPoints,
				setPlayerPoints,
				computerPoints,
				setComputerPoints,
				winner,
				setWinner,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
