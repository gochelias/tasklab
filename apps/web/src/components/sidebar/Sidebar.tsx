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
			<div className="z-0 mt-20 space-y-4 px-4">
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
