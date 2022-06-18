import { SearchIcon } from '@tasklab/ui';
import { Home } from './Home';
import { Timeline } from './Timeline';
import { Settings } from './Settings';
import { User } from './User';
import { Workspace } from './Workspace';

export const Sidebar = () => (
	<div className="flex h-screen select-none flex-col justify-between border-r-2 border-slate-100 dark:border-slate-700">
		<div>
			<div>
				<Workspace />
			</div>
			<div className="z-0 mt-6 space-y-4 px-4">
				<button className="mb-20 flex h-12 w-full items-center rounded-2xl border-2 border-slate-100 bg-transparent px-4 text-left text-slate-500 hover:bg-slate-100 dark:border-slate-700 hover:dark:bg-slate-700">
					<SearchIcon className="mr-3" />
					Search
				</button>
				<Home href="/" />
				<Timeline href="/timeline" />
			</div>
		</div>
		<div className="space-y-4 p-4">
			<Settings href="/settings" />
			<div>
				<User href="/@me" />
			</div>
		</div>
	</div>
);
