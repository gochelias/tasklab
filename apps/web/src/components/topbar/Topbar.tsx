import { IconButton, SearchIcon, NotificationIcon } from '@tasklab/ui';
import { CreateNew } from './CreateNew';

export const Topbar = () => (
	<>
		<IconButton icon={<SearchIcon />} />
		<div className="flex space-x-4">
			<IconButton icon={<NotificationIcon />} />
			<CreateNew />
		</div>
	</>
);
