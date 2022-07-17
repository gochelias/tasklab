import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Sidebar } from '../components/sidebar/Sidebar';
import { useDarkMode } from '../hooks/useDarkMode';
/* import { CommandPalette } from '../components/CommandPalette'; */

export default function App({ Component, pageProps }: AppProps) {
	useDarkMode();
	return (
		<>
			{/* <CommandPalette /> */}
			<div className="flex h-screen w-full text-lg">
				<div className="max-w-xs">
					<Sidebar />
				</div>
				<div className="relative flex flex-auto">
					<div className="flex h-full w-full">
						<Component {...pageProps} />
					</div>
				</div>
			</div>
		</>
	);
}
