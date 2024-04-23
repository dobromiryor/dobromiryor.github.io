import {
	createContext,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from "react";

type GravityContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export const GravityContext = createContext<GravityContextType | undefined>(
	undefined
);

interface GravityProviderProps {
	children: ReactNode;
}

export const GravityProvider = ({ children }: GravityProviderProps) => {
	const [isRunning, setIsRunning] = useState<boolean>(false);

	return (
		<GravityContext.Provider value={[isRunning, setIsRunning]}>
			{children}
		</GravityContext.Provider>
	);
};
