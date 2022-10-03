import { IconButton, NotificationIcon } from '@tasklab/ui';
import { CreateNew } from './CreateNew';

export const Topbar = () => (
	<>
		<div className="flex h-20 w-full items-center justify-between px-4">
			<div>{'<'}</div>
			<div className="flex space-x-6">
				<IconButton icon={<NotificationIcon />} />
				<CreateNew />
			</div>
		</div>
	</>
);
