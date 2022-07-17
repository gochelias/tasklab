import { SettingsIcon } from '@tasklab/ui';
import Image from 'next/image';
import { useState } from 'react';

import { Settings } from './settings/Settings';

export const User = ({ sidebarIsOpen }: { sidebarIsOpen: boolean }) => {
	const [isOpen, setIsOpen] = useState(false);
	const openSettings = () => setIsOpen(true);

	const img =
		'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80';

	return (
		<>
			<button
				className={`flex max-h-[76px] items-center rounded-2xl border-2 py-4 ${
					sidebarIsOpen
						? 'w-12 justify-center border-transparent'
						: 'w-full border-slate-100 px-4 dark:border-slate-700'
				}`}
				onClick={openSettings}
			>
				<div className="flex space-x-3 ">
					<div
						className={`relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-slate-100 dark:ring-slate-700 `}
					>
						<Image layout="fill" alt="avatar" src={img} />
					</div>
					{sidebarIsOpen ? (
						''
					) : (
						<div className="m-auto flex flex-col items-start leading-none">
							<p className="font-semibold text-slate-700 dark:text-slate-200">
								Natalie Jackson
							</p>
							<p className="text-base leading-none text-slate-500 dark:text-slate-400">
								@nateson
							</p>
						</div>
					)}
				</div>
				{sidebarIsOpen ? (
					''
				) : (
					<SettingsIcon className="ml-auto text-slate-500" />
				)}
			</button>
			<Settings isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
};

/* <SettingsIcon
					className={`ml-auto text-slate-500 ${
						sidebarIsOpen ? 'hidden' : 'flex'
					}`}
				/> */
