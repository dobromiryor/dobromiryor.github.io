import { Cylinder, Html, Image } from "@react-three/drei";
import {
	CylinderCollider,
	RigidBody,
	type RapierRigidBody,
} from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { DoubleSide, type Mesh } from "three";

import clsx from "clsx";
import DARK from "../../consts/3d-dark.const";
import LIGHT from "../../consts/3d-light.const";
import { GameSign } from "../../enums/game-sign.enum";
import { GameState } from "../../enums/game-state.enum";
import { Theme } from "../../enums/theme.enum";
import { useGame } from "../../hooks/useGame";
import { useGravity } from "../../hooks/useGravity";
import { useTheme } from "../../hooks/useTheme";
import { type Letter } from "../../types/letter.type";
import { Icon } from "../Icon";

interface Image3DProps {
	letters: Letter[];
}

export const Image3D = ({ letters }: Image3DProps) => {
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
			density={100}
			friction={0.5}
			linearDamping={0.1}
			position={[
				letters[0].max?.x != null
					? letters
							.filter((item) => item.row === 1)
							.reduce(
								(acc, curr) =>
									curr.character === " " ? acc + 0.3 : acc + (curr.max?.x ?? 0),
								0
							) +
						(meshRef.current?.geometry.boundingSphere?.radius ?? 1) * 2
					: 8,
				0,
				0,
			]}
			restitution={0.3}
			scale={5}
			gravityScale={isRunning ? 1 : 0}
		>
			<Image
				ref={meshRef}
				position={[0, 0, 0.021]}
				side={DoubleSide}
				transparent={true}
				url="/images/me.png"
			/>
			<Cylinder args={[0.5, 0.5, 0.04]} rotation={[Math.PI / 2, 0, 0]}>
				<meshStandardMaterial color={theme === Theme.LIGHT ? LIGHT : DARK} />
			</Cylinder>
			<CylinderCollider args={[0.02, 0.5]} rotation={[Math.PI / 2, 0, 0]} />
			<Html transform position={[0, 0, 0.02]} scale={0.125}>
				<div className="relative w-full h-full aspect-square scale-[8]">
					{state === GameState.INITIAL && (
						<img
							src="/images/me.png"
							className={clsx(
								"absolute w-full h-full -z-10 scale-[1.1] opacity-15",
								"animate-custom-ping"
							)}
						/>
					)}
					<button
						className={clsx(
							"flex justify-center items-center ",
							"opacity-0 w-full h-full rounded-full transition-opacity",
							state === GameState.INITIAL && "hover:opacity-100"
						)}
						onClick={() =>
							state === GameState.INITIAL && setState(GameState.RUNNING)
						}
						disabled={state !== GameState.INITIAL}
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
