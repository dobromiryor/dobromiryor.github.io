import { type RigidBodyProps } from "@react-three/rapier";

export const RIGID_BODY_PROPS: RigidBodyProps = {
	colliders: "hull",
	scale: 0.33,
	gravityScale: 0.75,
	restitution: 0.1,
	linearDamping: 0.25,
	angularDamping: 0.25,
};
