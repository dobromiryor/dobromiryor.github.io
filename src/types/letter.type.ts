import { type Vector3 } from "three";

export type Letter = {
	character: string;
	index: number;
	row: number;
	max: Vector3;
};
