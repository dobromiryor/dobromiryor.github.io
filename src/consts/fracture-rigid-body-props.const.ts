import { type RigidBodyProps } from "@react-three/rapier";

export const FRACTURE_RIGID_BODY_PROPS: RigidBodyProps = {
	colliders: "hull",
	restitution: 0.1,
	angularDamping: 2,
	linearDamping: 1,
	friction: 2,
};
