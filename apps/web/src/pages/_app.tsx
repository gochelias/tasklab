import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Sidebar } from '../components/sidebar/Sidebar';
import { useDarkMode } from '../hooks/useDarkMode';
import { Topbar } from '../components/topbar/Topbar';

export default function App({ Component, pageProps }: AppProps) {
	useDarkMode();
	return (
		<div className="flex w-full h-screen text-lg">
			<div className="w-80 max-w-xs">
				<Sidebar />
			</div>
			<div className="flex flex-auto relative">
				<div className="flex absolute border-b border-#[#f2f2f7] dark:border-[#2C2C2E] justify-between w-full p-4 h-20">
					<Topbar />
				</div>
				<div className="flex h-full w-full pt-20">
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
}
