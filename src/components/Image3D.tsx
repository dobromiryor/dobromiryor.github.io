import { Cylinder, Image } from "@react-three/drei";
import {
	CylinderCollider,
	RigidBody,
	type RapierRigidBody,
} from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { DoubleSide, type Mesh } from "three";

import DARK from "../consts/3d-dark.const";
import LIGHT from "../consts/3d-light.const";
import { Theme } from "../enums/theme.enum";
import { useTheme } from "../hooks/useTheme";
import { type Letter } from "../types/letter.type";

interface Image3DProps {
	letters: Letter[];
	isRunning: boolean;
}

export const Image3D = ({ letters, isRunning }: Image3DProps) => {
	const meshRef = useRef<Mesh>(null);
	const bodyRef = useRef<RapierRigidBody>(null);

	const theme = useTheme();

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
				letters[0].max.x > 0
					? letters
							.filter((item) => item.row === 1)
							.reduce(
								(acc, curr) =>
									curr.character === " " ? acc + 0.3 : acc + curr.max.x,
								0
							) +
						(meshRef.current?.geometry.boundingSphere?.radius ?? 1) * 2
					: 8,
				0,
				0,
			]}
			restitution={0.3}
			scale={5}
		>
			<Image
				ref={meshRef}
				position={[0, 0, 0.021]}
				side={DoubleSide}
				transparent={true}
				url="/me.png"
			/>
			<Cylinder args={[0.5, 0.5, 0.04]} rotation={[Math.PI / 2, 0, 0]}>
				<meshStandardMaterial color={theme === Theme.LIGHT ? LIGHT : DARK} />
			</Cylinder>
			<CylinderCollider args={[0.02, 0.5]} rotation={[Math.PI / 2, 0, 0]} />
		</RigidBody>
	);
};
