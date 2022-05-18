import { Dashboard } from './Dashboard';
import { Timeline } from './Timeline';
import { Settings } from './Settings';
import { Search } from './Search';
import { User } from './User';

export const Sidebar = () => (
	<div className="flex flex-col w-64 h-screen border-r border-gray-200 justify-between select-none">
		<div className="p-4 space-y-4">
			<Search />
		</div>
		<div className="px-4 space-y-4">
			<Dashboard href="/" />
			<Timeline href="/timeline" />
		</div>
		<div className="p-4 space-y-4">
			<Settings href="/settings" />
			<User />
		</div>
	</div>
);
