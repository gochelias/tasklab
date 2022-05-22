import { IconButton, MaximizeIcon, SettingsIcon } from '@tasklab/ui';

import { Fragment } from 'react';
import { Tag } from './Tag';
import { TaskTabs } from './TaskTabs';

export const TaskPreview = () => (
	<Fragment>
		<div className="h-full overflow-hidden">
			<div>
				<div className="flex space-x-4 mb-4 justify-end">
					<IconButton icon={<MaximizeIcon />} />
					<IconButton icon={<SettingsIcon />} />
				</div>
				<h1 className="text-3xl font-semibold dark:text-[#f2f2f7] ">
					Title Example
				</h1>
				<div className="flex my-4 text-sm space-x-2 py-4">
					<Tag label="Style Guide" emoji="🚀" />
					<Tag label="Design System" />
					{/* <span className="px-3 py-2 rounded-2xl">+</span> */}
				</div>
			</div>
			<div className="h-full overflow-hidden">
				<TaskTabs />
			</div>
		</div>
	</Fragment>
);
