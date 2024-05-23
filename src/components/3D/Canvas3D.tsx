import {
	CameraControls,
	Center,
	Loader,
	OrthographicCamera,
	PerformanceMonitor,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
	CuboidCollider,
	Physics,
	type CollisionPayload,
} from "@react-three/rapier";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { Object3D, Vector3, type OrthographicCamera as OCam } from "three";

import { GAME_GROUP_POSITION } from "../../consts/game-group-position.const";
import { GameState } from "../../enums/game-state.enum";
import { useGame } from "../../hooks/useGame";
import { useGravity } from "../../hooks/useGravity";
import { useObserver } from "../../hooks/useObserver";
import { GameController } from "./GameController";
import { Image3D } from "./Image3D";
import { Hero } from "./models/Hero";

export const Canvas3D = () => {
	const [dpr, setDpr] = useState(2);

	const [ref, bounds] = useMeasure();
	const { state } = useGame();
	const [isRunning, setIsRunning] = useGravity();
	const isIntersecting = useObserver();

	const cameraRef = useRef<OCam>(null);
	const cameraControlsRef = useRef<CameraControls>(null);
	const lightTarget = useRef(new Object3D());

	const frustum = 800;
	const zoom = frustum * 0.1;
	const aspectRatio = bounds.height / bounds.width;
	const horizontal = aspectRatio < 1 ? frustum / aspectRatio : frustum;
	const vertical = aspectRatio < 1 ? frustum : frustum * aspectRatio;

	const floorSize = 50;
	const floorHeight = 1;
	// keep the floor near the bottom of the canvas
	const floorPosition =
		aspectRatio > 1 ? (frustum / zoom) * aspectRatio : frustum / zoom;

	const onIntersection = (e: CollisionPayload) => {
		const { initialPosition } = e.rigidBodyObject?.userData ?? {
			initialPosition: new Vector3(),
		};

		// teleport to initial position and reset linear velocities
		e.rigidBody?.setTranslation(
			new Vector3(...(initialPosition ? initialPosition : [0, 0, 0])),
			true
		);
		e.rigidBody?.setLinvel(new Vector3(), true);
	};

	// for touch devices only
	const canHover = matchMedia("(hover: hover)").matches;

	useEffect(() => {
		lightTarget.current?.position.set(0, -4, 0);
	}, [lightTarget]);

	useEffect(() => {
		if (isIntersecting && !isRunning) {
			setIsRunning(true);
		}
	}, [isIntersecting, isRunning, setIsRunning]);

	useEffect(() => {
		if (state === GameState.RUNNING) {
			cameraControlsRef.current?.truck(GAME_GROUP_POSITION, 0, true);
		} else if (state === GameState.FINISHED) {
			cameraControlsRef.current?.truck(-GAME_GROUP_POSITION, 0, true);
		}
	}, [state]);

	return (
		<div className="relative w-full h-screen ">
			<Canvas ref={ref} dpr={dpr}>
				<PerformanceMonitor
					onDecline={() => setDpr(1)}
					onIncline={() => setDpr(2)}
				/>
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
				<CameraControls
					ref={cameraControlsRef}
					mouseButtons={{ left: 0, middle: 0, right: 0, wheel: 0 }}
					touches={{ one: 0, two: 0, three: 0 }}
				/>
				<Physics>
					{/* TODO: Check if react-three/eslint-plugin fixes no-unknown-property */}
					{/* eslint-disable react/no-unknown-property */}
					<directionalLight
						intensity={1}
						position={[0, -4, 10]}
						target={lightTarget.current}
					/>
					<ambientLight intensity={1} position={[0, -4, 10]} />
					{/* eslint-enable react/no-unknown-property */}
					<Suspense fallback={null}>
						<Center>
							<Center>
								<Hero />
							</Center>
							<Image3D />
						</Center>
					</Suspense>
					<GameController isVertical={isVertical} />
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
			</Canvas>
			<Loader
				key="Home__Loader"
				containerStyles={{ background: "none" }}
				dataStyles={{ display: "none" }}
			/>
			{/* TODO: Check if CameraControls added a way to override touch events to be able to scroll
			 * https://github.com/yomotsu/camera-controls/issues/436
			 */}
			{/* This overlay is only rendered on touch devices and is used to add touch events on top of the canvas to be able to scroll. */}
			{!canHover && (
				<div
					className="absolute top-0 left-0 w-full h-full"
					onClick={(e) => e.stopPropagation()}
				/>
			)}
		</div>
	);
};
