import {
	AddSquareIcon,
	IconButton,
	NotificationIcon,
	SearchIcon,
} from '@tasklab/ui';
import { Fragment } from 'react';

export const Topbar = () => (
	<Fragment>
		<IconButton icon={<SearchIcon />} />
		<div className="flex space-x-4">
			<IconButton icon={<NotificationIcon />} />
			<button className="leading-none px-4 py-3 bg-[#007AFF] text-white rounded-2xl m-auto text-center inline-flex items-center">
				<AddSquareIcon className="mr-3" active={true} />
				Create New
			</button>
		</div>
	</Fragment>
);
