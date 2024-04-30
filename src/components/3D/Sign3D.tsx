import { useMemo } from "react";
import { Euler, Vector3 } from "three";

import { GAME_GROUP_POSITION } from "../../consts/game-group-position.const";
import { GameSide } from "../../enums/game-side.enum";
import { GameSign } from "../../enums/game-sign.enum";
import { FracturedPaper } from "./models/FracturedPaper";
import { FracturedRock } from "./models/FracturedRock";
import { FracturedScissors } from "./models/FracturedScissors";
import { Paper } from "./models/Paper";
import { Rock } from "./models/Rock";
import { Scissors } from "./models/Scissors";

interface Sign3DProps {
	side: GameSide;
	sign: GameSign;
	winner: boolean;
}

const SIDE_DISTANCE = 5;
const SIDE_IMPULSE_VELOCITY = 0.33;

export const Sign3D = ({ side, sign, winner }: Sign3DProps) => {
	const sideRotation = useMemo(
		() => (side === GameSide.COMPUTER ? 0 : Math.PI),
		[side]
	);

	const x = useMemo(
		() => (side === GameSide.COMPUTER ? SIDE_DISTANCE : -SIDE_DISTANCE),
		[side]
	);

	const props = useMemo(() => {
		const signSideImpulseVelocity =
			sign === GameSign.ROCK
				? SIDE_IMPULSE_VELOCITY * (1 / 3) * 2
				: SIDE_IMPULSE_VELOCITY;

		return {
			userData: {
				sideVelocity:
					side === GameSide.COMPUTER
						? -signSideImpulseVelocity
						: signSideImpulseVelocity,
				initialPosition: new Vector3(GAME_GROUP_POSITION, 0, 0),
			},
			position: new Vector3(x, 0, 0),
			rotation: new Euler(0, sideRotation, 0),
		};
	}, [side, sideRotation, sign, x]);

	const signMap = useMemo(
		() => ({
			rock: {
				solid: <Rock {...props} />,
				fractured: <FracturedRock {...props} />,
			},
			paper: {
				solid: <Paper {...props} />,
				fractured: <FracturedPaper {...props} />,
			},
			scissors: {
				solid: <Scissors {...props} />,
				fractured: <FracturedScissors {...props} />,
			},
		}),
		[props]
	);

	return signMap[sign][winner ? "solid" : "fractured"];
};
