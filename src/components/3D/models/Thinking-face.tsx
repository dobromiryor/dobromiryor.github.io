/* eslint-disable react/no-unknown-property */

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 thinking-face.glb -t 
*/

import { useGLTF } from "@react-three/drei";
import {
	RigidBody,
	type RapierRigidBody,
	type RigidBodyProps,
} from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Euler, Vector3, type Mesh, type MeshStandardMaterial } from "three";
import { type GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		Curve020: Mesh;
		Curve020_1: Mesh;
		Curve020_2: Mesh;
		Curve020_3: Mesh;
		Curve020_4: Mesh;
		Curve020_5: Mesh;
	};
	materials: {
		["SVGMat.005"]: MeshStandardMaterial;
		["Material.001"]: MeshStandardMaterial;
		["SVGMat.001"]: MeshStandardMaterial;
		["Material.003"]: MeshStandardMaterial;
		["SVGMat.002"]: MeshStandardMaterial;
		["SVGMat.004"]: MeshStandardMaterial;
	};
};

const ROTATION_VELOCITY = 25;

enum Rotation {
	CLOCKWISE = ROTATION_VELOCITY,
	COUNTER_CLOCKWISE = -ROTATION_VELOCITY,
}

interface ThinkingFaceProps extends RigidBodyProps {
	groupProps?: JSX.IntrinsicElements["group"];
}

export function ThinkingFace({ groupProps, ...props }: ThinkingFaceProps) {
	const [isFirstRotation, setIsFirstRotation] = useState(true);
	const [rotation, setRotation] = useState<Rotation>(Rotation.CLOCKWISE);

	const ref = useRef<RapierRigidBody>(null);

	const { nodes, materials } = useGLTF(
		"/models/thinking-face.glb"
	) as GLTFResult;

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout> | undefined;

		const rotate = (nextRotation: Rotation) => {
			ref.current?.applyTorqueImpulse(
				new Vector3(0, isFirstRotation ? nextRotation / 2 : nextRotation, 0),
				true
			);
			ref.current?.resetTorques(true);

			if (isFirstRotation) {
				setIsFirstRotation(false);
			}

			setRotation(nextRotation);
		};

		const switchRotation = async () => {
			timeout = setTimeout(() => {
				switch (rotation) {
					case Rotation.CLOCKWISE:
						return rotate(Rotation.COUNTER_CLOCKWISE);
					case Rotation.COUNTER_CLOCKWISE:
						return rotate(Rotation.CLOCKWISE);
				}
			}, 3000);
		};

		switchRotation();

		return () => clearTimeout(timeout);
	}, [isFirstRotation, rotation]);

	return (
		<RigidBody
			ref={ref}
			angularDamping={1}
			canSleep={false}
			enabledRotations={[false, true, false]}
			linearDamping={0.1}
			rotation={new Euler(0, Math.PI, 0)}
			{...props}
		>
			<group {...groupProps} dispose={null}>
				<group rotation={[Math.PI / 2, 0, -Math.PI]} scale={100}>
					<mesh
						geometry={nodes.Curve020.geometry}
						material={materials["SVGMat.005"]}
					/>
					<mesh
						geometry={nodes.Curve020_1.geometry}
						material={materials["Material.001"]}
					/>
					<mesh
						geometry={nodes.Curve020_2.geometry}
						material={materials["SVGMat.001"]}
					/>
					<mesh
						geometry={nodes.Curve020_3.geometry}
						material={materials["Material.003"]}
					/>
					<mesh
						geometry={nodes.Curve020_4.geometry}
						material={materials["SVGMat.002"]}
					/>
					<mesh
						geometry={nodes.Curve020_5.geometry}
						material={materials["SVGMat.004"]}
					/>
				</group>
			</group>
		</RigidBody>
	);
}

useGLTF.preload("/models/thinking-face.glb");
