import { useEffect } from 'react';

export const useDarkMode = () => {
	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.add('white');
	}, []);
};
