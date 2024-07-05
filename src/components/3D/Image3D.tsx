import { Cylinder, Html, Image } from "@react-three/drei";
import {
	CylinderCollider,
	RigidBody,
	type RapierRigidBody,
} from "@react-three/rapier";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { DoubleSide, type Mesh } from "three";

import DARK from "../../consts/3d-dark.const";
import LIGHT from "../../consts/3d-light.const";
import { GameSign } from "../../enums/game-sign.enum";
import { GameState } from "../../enums/game-state.enum";
import { Theme } from "../../enums/theme.enum";
import { useGame } from "../../hooks/useGame";
import { useGravity } from "../../hooks/useGravity";
import { useTheme } from "../../hooks/useTheme";
import { Icon } from "../Icon";

export const Image3D = () => {
	const meshRef = useRef<Mesh>(null);
	const bodyRef = useRef<RapierRigidBody>(null);

	const theme = useTheme();
	const [isRunning] = useGravity();
	const { state, setState } = useGame();

	useEffect(() => {
		if (isRunning) {
			bodyRef.current?.wakeUp();
		}
	}, [isRunning]);

	return (
		<RigidBody
			ref={bodyRef}
			angularDamping={1}
			colliders={false}
			friction={0.5}
			gravityScale={isRunning ? 1 : 0}
			linearDamping={0.1}
			position={[8, 0, 0]}
			restitution={0.3}
			scale={5}
		>
			<Image
				ref={meshRef}
				position={[0, 0, 0.026]}
				side={DoubleSide}
				transparent={true}
				url="/images/me.png"
			/>
			<Cylinder args={[0.5, 0.5, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
				<meshStandardMaterial color={theme === Theme.LIGHT ? LIGHT : DARK} />
			</Cylinder>
			<CylinderCollider args={[0.025, 0.5]} rotation={[Math.PI / 2, 0, 0]} />
			<Html transform position={[0, 0, 0.025]} scale={0.125}>
				<div className="relative w-full h-full aspect-square scale-[8]">
					{state === GameState.INITIAL && (
						<img
							alt=""
							className={clsx(
								"absolute w-full h-full -z-10 scale-[1.1] opacity-15",
								"animate-custom-ping"
							)}
							role="presentation"
							src="/images/me.png"
						/>
					)}
					<button
						className={clsx(
							"flex justify-center items-center ",
							"opacity-0 w-full h-full rounded-full transition-opacity",
							state === GameState.INITIAL &&
								"hover:opacity-100 focus:opacity-100"
						)}
						disabled={state !== GameState.INITIAL}
						tabIndex={1}
						onClick={() =>
							state === GameState.INITIAL && setState(GameState.RUNNING)
						}
					>
						{Object.values(GameSign).map((sign) => (
							<Icon
								key={sign}
								className="w-3 h-3 -scale-x-90 scale-y-90"
								icon={sign}
							/>
						))}
					</button>
				</div>
			</Html>
		</RigidBody>
	);
};
