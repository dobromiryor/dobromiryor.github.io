import { Canvas3D } from "../components/Canvas3D";
import { Head } from "../components/Head";
import { Projects } from "../components/Projects";
import { useObserver } from "../hooks/useObserver";

export const Home = () => {
	const [ref] = useObserver({ isSingleUse: true });

	return (
		<>
			<Head />
			<div className="flex flex-col items-center gap-8 w-full">
				<h1 className="sr-only">Hello there! 👋 I&apos;m Dobromir Yordanov</h1>
				<Canvas3D />
				<div ref={ref} className="flex flex-col p-4 gap-8 max-w-screen-2xl">
					<p className="self-center text-center text-xl font-medium max-w-lg">
						<span className="font-bold">
							I like developing stuff on the web.&nbsp;
						</span>
						<span>Here are a couple of my (mostly finished) projects:</span>
					</p>
					<Projects />
				</div>
			</div>
		</>
	);
};
