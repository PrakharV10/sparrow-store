import React, { createContext, useContext, useState } from 'react';

const IsLoadingContext = createContext();

export function IsLoadingProvider({ children }) {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
			{children}
		</IsLoadingContext.Provider>
	);
}

export function useIsLoading() {
	return useContext(IsLoadingContext);
}
