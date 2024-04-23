import { Center, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
	CuboidCollider,
	Physics,
	type CollisionPayload,
} from "@react-three/rapier";
import clsx from "clsx";
import { Suspense, useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { Object3D, Vector3, type OrthographicCamera as OCam } from "three";

import { useGravity } from "../hooks/useGravity";
import { useObserver } from "../hooks/useObserver";
import { type Letter } from "../types/letter.type";
import { Hand3D } from "./Hand3D";
import { Image3D } from "./Image3D";
import { Letter3D } from "./Letter3D";

const text = ["Hello there! #", "I'm Dobromir", "Yordanov"];

export const Canvas3D = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [letters, setLetters] = useState<Letter[]>(
		text
			.map((row, rowIndex) =>
				row.split("").map((character, index) => ({
					character,
					index,
					row: rowIndex,
					max: new Vector3(),
				}))
			)
			.flat()
	);

	const [ref, bounds] = useMeasure();
	const [isRunning, setIsRunning] = useGravity();
	const [_ref, isIntersecting] = useObserver({ isSingleUse: true });

	const cameraRef = useRef<OCam>(null);
	const lightTarget = useRef(new Object3D());

	const frustum = 800;
	const zoom = frustum * 0.1;
	const aspectRatio = bounds.height / bounds.width;
	const horizontal = aspectRatio < 1 ? frustum / aspectRatio : frustum;
	const vertical = aspectRatio < 1 ? frustum : frustum * aspectRatio;

	const floorSize = 25;
	const floorPosition = (frustum / zoom) * aspectRatio;
	const floorHeight = 1;

	const onIntersection = (e: CollisionPayload) => {
		const { initialPosition } = e.rigidBodyObject?.userData ?? {
			initialPosition: new Vector3(),
		};

		e.rigidBody?.setTranslation(
			new Vector3(...(initialPosition ? initialPosition : [0, 0, 0])),
			true
		);
		e.rigidBody?.resetForces(true);
		e.rigidBody?.resetTorques(true);
	};

	useEffect(() => {
		lightTarget.current?.position.set(0, -4, 0);
	}, [lightTarget]);

	useEffect(() => {
		if (isIntersecting && !isRunning) {
			setIsRunning(true);
		}
	}, [isIntersecting, isRunning, setIsRunning]);

	useEffect(() => {
		if (
			letters.filter(
				(item) =>
					item.character !== " " &&
					item.character !== "#" &&
					(item.max.x === 0 || item.max.y === 0 || item.max.z === 0)
			).length === 0
		) {
			setIsLoading(false);
		}
	}, [letters]);

	return (
		<div
			className={clsx(
				"w-full h-screen transition-opacity duration-500",
				isLoading ? "opacity-0" : "opacity-100"
			)}
		>
			<Canvas ref={ref} orthographic>
				<Suspense>
					<OrthographicCamera
						ref={cameraRef}
						makeDefault
						manual
						bottom={-vertical}
						left={-horizontal}
						position={[0, 0, frustum]}
						right={horizontal}
						top={vertical}
						zoom={zoom}
					/>
					{/* <OrbitControls /> */}
					<Physics gravity={[0, isRunning ? -9.81 : 0, 0]}>
						{/* TODO: Check if react-three/eslint-plugin fixes no-unknown-property */}
						{/* eslint-disable react/no-unknown-property */}
						<directionalLight
							intensity={1}
							position={[0, -4, 10]}
							target={lightTarget.current}
						/>
						{/* eslint-enable react/no-unknown-property */}
						{/* eslint-disable react/no-unknown-property */}
						<ambientLight intensity={1} position={[0, -4, 10]} />
						{/* eslint-enable react/no-unknown-property */}
						<Center>
							<Center>
								{letters.map((item) =>
									item.character === "#" ? (
										<Hand3D
											key={`Row__${item.row}__Hand__${item.index}`}
											isRunning={isRunning}
											letter={item}
											letters={letters}
											setLetters={setLetters}
										/>
									) : (
										<Letter3D
											key={`Row__${item.row}__Letter__${item.character}__${item.index}`}
											isRunning={isRunning}
											letter={item}
											letters={letters}
											setLetters={setLetters}
										/>
									)
								)}
							</Center>
							<Image3D isRunning={isRunning} letters={letters} />
						</Center>
						<CuboidCollider
							args={[floorSize, floorHeight, floorSize]}
							friction={0.1}
							position={[0, -floorPosition, 0]}
							restitution={0.3}
						/>
						<CuboidCollider
							sensor
							args={[2000, floorHeight, 2000]}
							position={[0, -((floorPosition - floorHeight * 2) * 2), 0]}
							onIntersectionExit={onIntersection}
						/>
					</Physics>
				</Suspense>
			</Canvas>
		</div>
	);
};
