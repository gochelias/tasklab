import { SearchIcon } from '@tasklab/ui';
import { useState } from 'react';
import { CommandPalette } from '../CommandPalette';
import { Home } from './Home';
import { Timeline } from './Timeline';
import { User } from './User';
import { Workspace } from './Workspace';

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<>
			<CommandPalette isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className="flex h-screen select-none flex-col justify-between border-r-2 border-slate-100 dark:border-slate-700">
				<div>
					<div>
						<Workspace />
					</div>
					<div className="z-0 mt-6 space-y-4 px-4">
						<button
							className="mb-20 flex h-12 w-full items-center justify-between rounded-2xl border-2 border-slate-100 bg-transparent px-4 text-left text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 hover:dark:bg-slate-700"
							onClick={() => setIsOpen(true)}
						>
							<div className="flex">
								<SearchIcon className="mr-3" />
								Search
							</div>
							<div className="flex space-x-1">
								<div className="bg-slate-3b00 rounded-md border-b-4 border-slate-500 bg-slate-300 py-1 px-2  text-xs font-semibold leading-none text-slate-700">
									CMD
								</div>
								<div className="w-min rounded-md border-b-4 border-slate-500 bg-slate-300 py-1 px-2  text-xs font-semibold leading-none text-slate-700">
									K
								</div>
							</div>
						</button>
						<Home href="/" />
						<Timeline href="/timeline" />
					</div>
				</div>
				<div className="p-4">
					<User />
				</div>
			</div>
		</>
	);
};
