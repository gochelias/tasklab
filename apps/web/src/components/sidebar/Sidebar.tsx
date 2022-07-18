import { SearchIcon } from '@tasklab/ui';
import { Fragment, useState } from 'react';

import { Workspace } from './Workspace';
import { CommandPalette } from '../CommandPalette';
import { Home } from './Home';
import { Timeline } from './Timeline';
import { User } from './User';
import { Projects } from './Projects';

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

	const openSidebar = () => setSidebarIsOpen(!sidebarIsOpen);

	return (
		<>
			<CommandPalette isOpen={isOpen} setIsOpen={setIsOpen} />
			<div
				className={`relative flex h-screen select-none flex-col justify-between ${
					sidebarIsOpen ? 'w-20' : 'w-80'
				}`}
			>
				<div>
					<div>
						<Workspace sidebarIsOpen={sidebarIsOpen} />
					</div>
					<button
						className={`mx-4 mb-20 mt-6 flex h-12 items-center rounded-2xl border-2 border-slate-100 bg-transparent text-left text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 hover:dark:bg-slate-700 ${
							sidebarIsOpen ? 'w-12 justify-center' : 'w-72 px-4'
						}`}
						onClick={() => setIsOpen(true)}
					>
						<SearchIcon />
						<span
							className={`ml-3 leading-snug ${
								sidebarIsOpen && 'hidden'
							}`}
						>
							Search
						</span>
					</button>
					<div className="z-0 mt-6 space-y-4 px-4 ">
						<Home href="/" sidebarIsOpen={sidebarIsOpen} />
						<Projects
							href="/projects"
							sidebarIsOpen={sidebarIsOpen}
						/>
						<Timeline
							href="/timeline"
							sidebarIsOpen={sidebarIsOpen}
						/>
					</div>
				</div>
				<div className="p-4">
					<User sidebarIsOpen={sidebarIsOpen} />
				</div>
				<button
					onClick={openSidebar}
					className="group absolute -right-[12px] flex h-full w-6 justify-center self-end"
				>
					<div className="h-full w-0.5 bg-slate-100 group-hover:bg-slate-400 dark:bg-slate-700 dark:group-hover:bg-slate-500" />
					<div className="invisible absolute mt-44 flex h-6 w-6 items-center justify-center rounded-full text-white group-hover:visible group-hover:bg-slate-400 dark:group-hover:bg-slate-500">
						{sidebarIsOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						)}
					</div>
				</button>
			</div>
		</>
	);
};
