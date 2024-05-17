import {
	Center,
	Html,
	Loader,
	OrthographicCamera,
	PerformanceMonitor,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { Object3D, Vector3 } from "three";

import { ThinkingFace } from "../components/3D/models/Thinking-face";
import { Link } from "../components/Link";
import { Route } from "../enums/route.enum";

export const NotFound = () => {
	const [dpr, setDpr] = useState(2);

	const lightTarget = useRef(new Object3D());

	const [ref, bounds] = useMeasure();

	const frustum = 800;
	const zoom = frustum * 0.1;

	const aspectRatio = useMemo(
		() => bounds.height / bounds.width,
		[bounds.height, bounds.width]
	);

	const horizontal = useMemo(
		() => (aspectRatio < 1 ? frustum / aspectRatio : frustum),
		[aspectRatio]
	);

	const vertical = useMemo(
		() => (aspectRatio < 1 ? frustum : frustum * aspectRatio),
		[aspectRatio]
	);

	return (
		<div className="relative w-full h-screen">
			<Canvas ref={ref} dpr={dpr}>
				<Suspense>
					<PerformanceMonitor
						onDecline={() => setDpr(1)}
						onIncline={() => setDpr(2)}
					/>
					<OrthographicCamera
						makeDefault
						manual
						bottom={-vertical}
						left={-horizontal}
						position={[0, 0, frustum]}
						right={horizontal}
						top={vertical}
						zoom={zoom}
					/>
					<Physics gravity={[0, 0, 0]}>
						{/* eslint-disable react/no-unknown-property */}
						<directionalLight
							intensity={1}
							position={[0, -4, 10]}
							target={lightTarget.current}
						/>
						<ambientLight intensity={1} position={[0, -4, 10]} />
						{/* eslint-enable react/no-unknown-property */}
						<Center>
							<Html
								transform
								className="flex gap-8 select-none"
								occlude="blending"
								position={new Vector3(0, 0, -10)}
								zIndexRange={[0]}
							>
								<span className="font-bold text-[160px]">4</span>
								<span className="font-bold text-[160px]">0</span>
								<span className="font-bold text-[160px]">4</span>
							</Html>
							<ThinkingFace position={new Vector3(0, -0.1, 0)} />
						</Center>
					</Physics>
				</Suspense>
			</Canvas>
			<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
				<div className="flex flex-col justify-between items-center gap-32 md:gap-60 3xl:gap-[480px]">
					<h1 className="font-bold text-3xl">Page not found</h1>
					<Link href={Route.HOME}>Go back</Link>
				</div>
			</div>
			<Loader
				containerStyles={{ background: "none" }}
				dataStyles={{ display: "none" }}
			/>
		</div>
	);
};
