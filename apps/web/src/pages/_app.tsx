import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Sidebar } from '../components/sidebar/Sidebar';
import { useDarkMode } from '../hooks/useDarkMode';
import { Topbar } from '../components/topbar/Topbar';

export default function App({ Component, pageProps }: AppProps) {
	useDarkMode();
	return (
		<div className="flex h-screen w-full text-lg">
			<div className="w-80 max-w-xs">
				<Sidebar />
			</div>
			<div className="relative flex flex-auto">
				<div className="border-300-light dark:border-300-dark absolute flex h-20 w-full justify-between border-b-2 p-4">
					<Topbar />
				</div>
				<div className="flex h-full w-full pt-20">
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
}
