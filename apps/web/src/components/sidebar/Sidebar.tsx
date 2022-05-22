import { Dashboard } from './Dashboard';
import { Timeline } from './Timeline';
import { Settings } from './Settings';
import { User } from './User';

export const Sidebar = () => (
	<div className="flex flex-col h-screen border-r border-gray-200 dark:border-[hsl(240,2%,18%)] justify-between select-none">
		<div>
			<div className=" p-4 space-y-4 h-20">Title</div>
			<div className="px-4 space-y-4 mt-20">
				<Dashboard href="/" />
				<Timeline href="/timeline" />
			</div>
		</div>
		<div className="p-4 space-y-4">
			<Settings href="/settings" />
			<div>
				<User href="/@me" />
			</div>
		</div>
	</div>
);
