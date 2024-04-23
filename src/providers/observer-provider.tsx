import {
	createContext,
	useRef,
	useState,
	type Dispatch,
	type ReactNode,
	type RefObject,
	type SetStateAction,
} from "react";

type ObserverContextType = [
	RefObject<HTMLDivElement>,
	boolean,
	Dispatch<SetStateAction<boolean>>,
];

export const ObserverContext = createContext<ObserverContextType | undefined>(
	undefined
);

interface ObserverProviderProps {
	children: ReactNode;
}

export const ObserverProvider = ({ children }: ObserverProviderProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

	return (
		<ObserverContext.Provider value={[ref, isIntersecting, setIsIntersecting]}>
			{children}
		</ObserverContext.Provider>
	);
};
