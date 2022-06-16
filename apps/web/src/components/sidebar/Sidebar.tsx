import { Home } from './Home';
import { Timeline } from './Timeline';
import { Settings } from './Settings';
import { User } from './User';
import { Workspace } from './Workspace';

export const Sidebar = () => (
	<div className="border-300-light dark:border-300-dark flex h-screen select-none flex-col justify-between border-r-2">
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
