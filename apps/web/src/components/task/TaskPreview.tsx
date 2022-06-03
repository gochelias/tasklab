import { IconButton, MoreIcon, TaskTabs, TaskStatus } from '@tasklab/ui';
import { Tab } from '@headlessui/react';

import { Panels } from './Panels';

export const TaskPreview = () => (
	<>
		<Tab.Group>
			<div className="mb-10 flex items-center justify-between">
				<TaskStatus taskStatus="COMPLETED" />
				<div className="flex space-x-4">
					<Tab.List className="flex space-x-4">
						<TaskTabs />
					</Tab.List>
					<div className="flex flex-col items-center space-y-[2px]">
						<IconButton icon={<MoreIcon />} />
					</div>
				</div>
			</div>
			<Tab.Panels className="h-full max-w-[747.333px]">
				<Panels />
			</Tab.Panels>
		</Tab.Group>
	</>
);
