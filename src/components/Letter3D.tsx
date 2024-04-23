import { Text3D } from "@react-three/drei";
import { RigidBody, type RapierRigidBody } from "@react-three/rapier";
import {
	useEffect,
	useMemo,
	useRef,
	type Dispatch,
	type SetStateAction,
} from "react";
import { Vector3, type Mesh } from "three";

import DARK from "../consts/3d-dark.const";
import LIGHT from "../consts/3d-light.const";
import { Theme } from "../enums/theme.enum";
import { useTheme } from "../hooks/useTheme";
import { type Letter } from "../types/letter.type";

interface LetterProps {
	letter: Letter;
	letters: Letter[];
	setLetters: Dispatch<SetStateAction<Letter[]>>;
	isRunning: boolean;
}

export const Letter3D = ({
	letter,
	letters,
	setLetters,
	isRunning,
}: LetterProps) => {
	const bodyRef = useRef<RapierRigidBody>(null);
	const textRef = useRef<Mesh>(null);

	const theme = useTheme();

	const position = useMemo(
		() =>
			(textRef.current
				? [
						letters
							.filter(
								(item) => item.row === letter.row && item.index < letter.index
							)
							.reduce(
								(acc, curr) =>
									curr.character === " " ? acc + 0.3 : acc + curr.max.x,
								0
							),
						-letter.row * 1.5,
						0,
					]
				: [letter.index * 0.75, -letter.row * 1.5, 0]) as unknown as Vector3,
		[letter.index, letter.row, letters]
	);

	useEffect(() => {
		if (textRef.current) {
			setLetters((prev) => {
				const foundItem = prev.findIndex(
					(item) =>
						item.index === letter.index &&
						item.row === letter.row &&
						item.character === letter.character
				);

				if (foundItem >= 0) {
					const arr = [...prev];

					arr[foundItem].max =
						textRef.current?.geometry.boundingBox?.max ?? new Vector3();

					return arr;
				} else {
					return prev;
				}
			});
		}
	}, [letter, setLetters]);

	useEffect(() => {
		if (isRunning) {
			bodyRef.current?.wakeUp();
		}
	}, [isRunning, letter.character]);

	useEffect(() => {
		if (!isRunning) {
			bodyRef.current?.sleep();
		}
	}, [isRunning]);

	if (letter.character === " ") {
		return null;
	}

	return (
		<RigidBody
			ref={bodyRef}
			angularDamping={0.1}
			colliders="cuboid"
			friction={0.5}
			linearDamping={0.1}
			position={position}
			restitution={0.3}
			userData-initialPosition={position}
		>
			<Text3D
				ref={textRef}
				curveSegments={4}
				font={"./fonts/Rubik_Bold.json"}
				height={0.2}
			>
				{letter.character}
				<meshStandardMaterial color={theme === Theme.LIGHT ? LIGHT : DARK} />
			</Text3D>
		</RigidBody>
	);
};
