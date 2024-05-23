import { Canvas3D } from "../components/3D/Canvas3D";
import { Head } from "../components/Head";
import { Projects } from "../components/Projects";

export const Home = () => {
	return (
		<>
			<Head />
			<div className="flex flex-col items-center gap-8 w-full">
				<h1 className="sr-only">Hello there! 👋 I&apos;m Dobromir Yordanov</h1>
				<Canvas3D />
				<Projects />
			</div>
		</>
	);
};
