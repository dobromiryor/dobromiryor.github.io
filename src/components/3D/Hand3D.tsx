import { extend, useLoader } from "@react-three/fiber";
import { RigidBody, type RapierRigidBody } from "@react-three/rapier";
import {
	useEffect,
	useMemo,
	useRef,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react";
import { DoubleSide, ExtrudeGeometry, Vector3 } from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";

import { useGravity } from "../../hooks/useGravity";
import { type Letter } from "../../types/letter.type";

import wavingHand from "/waving_hand.svg";

interface Hand3DProps {
	letter: Letter;
	letters: Letter[];
	setLetters: Dispatch<SetStateAction<Letter[]>>;
}

extend({ ExtrudeGeometry });

const ROTATION_VELOCITY = -0.05;

enum Rotation {
	CLOCKWISE = ROTATION_VELOCITY,
	COUNTER_CLOCKWISE = -ROTATION_VELOCITY,
}

export const Hand3D = ({ letter, letters, setLetters }: Hand3DProps) => {
	const [rotation, setRotation] = useState<Rotation>(Rotation.CLOCKWISE);

	const svgData = useLoader(SVGLoader, wavingHand);
	const shapes = useMemo(() => {
		return svgData.paths.map((p) => p.toShapes(true));
	}, [svgData]);

	const [isRunning] = useGravity();

	const bodyRef = useRef<RapierRigidBody>(null);
	const geometryRef = useRef<ExtrudeGeometry>(null);

	const rotate = (nextRotation: Rotation) => {
		bodyRef.current?.applyTorqueImpulse(new Vector3(0, 0, nextRotation), true);
		bodyRef.current?.resetTorques(true);

		setRotation(nextRotation);
	};

	const stop = () => {
		bodyRef.current?.setAngularDamping(0.1);
		bodyRef.current?.setEnabledRotations(true, true, true, true);
		bodyRef.current?.resetTorques(true);
	};

	const position = useMemo(
		() =>
			geometryRef.current
				? new Vector3(
						letters
							.filter(
								(item) => item.row === letter.row && item.index < letter.index
							)
							.reduce(
								(acc, curr) =>
									curr.character === " " ? acc + 0.1 : acc + (curr.max?.x ?? 0),
								0
							),
						1.5,
						0.2
					)
				: new Vector3(letter.index * 0.65, 1.5, 0.2),
		[letter.index, letter.row, letters]
	);

	useEffect(() => {
		if (geometryRef.current) {
			setLetters((prev) => {
				const foundItem = prev.findIndex(
					(item) =>
						item.index === letter.index &&
						item.row === letter.row &&
						item.character === letter.character
				);

				if (foundItem >= 0) {
					const arr = [...prev];

					arr[foundItem].max = geometryRef.current?.boundingBox?.max;

					return arr;
				} else {
					return prev;
				}
			});
		}
	}, [letter, setLetters]);

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout> | undefined;

		const switchRotation = async () => {
			timeout = setTimeout(() => {
				switch (rotation) {
					case Rotation.CLOCKWISE:
						return rotate(Rotation.COUNTER_CLOCKWISE);
					case Rotation.COUNTER_CLOCKWISE:
						return rotate(Rotation.CLOCKWISE);
				}
			}, 1000);
		};

		if (!isRunning) {
			switchRotation();
		} else {
			stop();
		}

		return () => clearTimeout(timeout);
	}, [isRunning, rotation]);

	useEffect(() => {
		if (isRunning) {
			bodyRef.current?.wakeUp();
		}
	}, [isRunning]);

	useEffect(() => {
		if (!isRunning) {
			bodyRef.current?.setEnabledRotations(false, false, true, true);
		}
	}, [isRunning]);

	if (
		letters.filter((item) => item.row > 0 && item.max !== new Vector3())
			.length <= 0
	) {
		return null;
	}

	return (
		<RigidBody
			ref={bodyRef}
			angularDamping={1}
			colliders="hull"
			friction={0.5}
			gravityScale={isRunning ? 1 : 0}
			linearDamping={0.1}
			position={position}
			restitution={0.3}
			rotation={[-Math.PI, 0, Math.PI / 4]}
			userData-initialPosition={position}
		>
			<group scale={0.01}>
				{shapes.map((s, i) => (
					<mesh key={i}>
						{/* eslint-disable react/no-unknown-property */}
						<extrudeGeometry
							ref={geometryRef}
							args={[
								s,
								{
									depth: 20,
									steps: 30,
								},
							]}
						/>
						{/* eslint-enable react/no-unknown-property */}
						{/* eslint-disable react/no-unknown-property */}
						<meshStandardMaterial
							attach="material"
							color={svgData.paths[i].color}
							side={DoubleSide}
						/>
						{/* eslint-enable react/no-unknown-property */}
					</mesh>
				))}
			</group>
		</RigidBody>
	);
};
