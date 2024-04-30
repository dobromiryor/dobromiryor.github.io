import { Html } from "@react-three/drei";

import { CuboidCollider, IntersectionEnterPayload } from "@react-three/rapier";
import { Vector3 } from "three";
import { GAME_GROUP_POSITION } from "../../consts/game-group-position.const";
import { GameSide } from "../../enums/game-side.enum";
import { GameSign } from "../../enums/game-sign.enum";
import { GameState } from "../../enums/game-state.enum";
import { useGame } from "../../hooks/useGame";
import { Icon } from "../Icon";

export const GameController = () => {
	const { addSign, computerPoints, playerPoints, signs, state, winner } =
		useGame();

	const onIntersection = (e: IntersectionEnterPayload) => {
		const { sideVelocity } = e.rigidBodyObject?.userData ?? {
			sideVelocity: new Vector3(),
		};

		// launch winning sign towards the losing sign
		e.rigidBody?.applyImpulse(new Vector3(sideVelocity, 0, 0), true);
	};

	return (
		// eslint-disable-next-line react/no-unknown-property
		<group position={[GAME_GROUP_POSITION, 0, 0]}>
			<Html
				transform
				position={[0, 0, 10]}
				scale={0.5}
				className="scale-[2]"
			>
				{state === GameState.INITIAL ? null : winner != null ? (
					<span className="text-xl font-bold">
						{winner === GameSide.COMPUTER ? "You lost 🫤" : "You won! 👏"}
					</span>
				) : (
					<div className="flex flex-col gap-1 justify-center items-center p-2 backdrop-blur">
						<div className="flex gap-2 justify-center items-center">
							<div className="flex justify-center items-center w-12 h-12 rounded-full bg-sky-300">
								<Icon
									icon="silhouette"
									aria-label={`Player points: ${playerPoints}`}
									className="w-8 h-8 z-10"
								/>
							</div>
							<span className="text-xl font-bold">
								{playerPoints} - {computerPoints}
							</span>
							<img
								aria-label={`Dobromir's points: ${computerPoints}`}
								className="w-12 h-12 rounded-full"
								src="/images/me.png"
							/>
						</div>
						<div className="flex gap-2">
							{Object.values(GameSign).map((sign) => (
								<button key={sign} onClick={() => addSign(sign)}>
									<Icon className="w-12 h-12 -scale-x-100" icon={sign} />
								</button>
							))}
						</div>
					</div>
				)}
			</Html>
			{/* eslint-disable react/no-unknown-property */}
			<group position={[0, 0, 5]}>{signs.map((item) => item)}</group>
			{/* eslint-enable react/no-unknown-property */}
			<CuboidCollider
				sensor
				args={[10, 1, 1]}
				position={[0, 0, 5]}
				onIntersectionEnter={onIntersection}
			/>
		</group>
	);
};
