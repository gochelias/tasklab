import { MaximizeIcon, MoreIcon, TaskStatus, TaskTabs } from '@tasklab/ui';
import { Tab } from '@headlessui/react';

type AllStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

interface Status {
	taskStatus: AllStatus;
}

export const TaskNav = ({ taskStatus }: Status) => (
	<>
		<div className="mb-10 flex items-center justify-between pr-8">
			<TaskStatus taskStatus={taskStatus} />
			<div className="flex space-x-3">
				<Tab.List className="flex space-x-3">
					<TaskTabs />
				</Tab.List>
				<button className="icon-button icon-button-hover">
					<MaximizeIcon />
				</button>
				<button className="icon-button icon-button-hover">
					<MoreIcon className="rotate-90" />
				</button>
			</div>
		</div>
	</>
);
