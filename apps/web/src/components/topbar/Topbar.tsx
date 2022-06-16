import { IconButton, SearchIcon, NotificationIcon } from '@tasklab/ui';
import { CreateNew } from './CreateNew';

export const Topbar = () => (
	<>
		<div className="items absolute flex h-20 w-full items-center justify-between px-4">
			<div>{'<'}</div>
			<div className="relative flex h-20 items-center">
				<button className="absolute mx-auto flex h-12 w-80 items-center rounded-2xl bg-slate-100 px-4 text-left text-slate-400 dark:bg-slate-700">
					<SearchIcon className="mr-3" />
					Search
				</button>
			</div>
			<div className="flex space-x-6">
				<IconButton icon={<NotificationIcon />} />
				<CreateNew />
			</div>
		</div>
	</>
);
