import { IconButton, MoreIcon, TaskTabs } from '@tasklab/ui';
import { Tab } from '@headlessui/react';

import { Panels } from './Panels';

export const TaskPreview = () => (
	<>
		<div className="h-full overflow-hidden">
			<Tab.Group>
				<div className="flex space-x-4 mb-8 justify-end items-center">
					<Tab.List className="flex space-x-4">
						<TaskTabs />
					</Tab.List>
					<div className="flex flex-col items-center space-y-[2px]">
						<IconButton icon={<MoreIcon />} />
					</div>
				</div>
				<Tab.Panels className="mt-4 h-96 overflow-y-auto ">
					<Panels />
				</Tab.Panels>
			</Tab.Group>
		</div>
	</>
);
