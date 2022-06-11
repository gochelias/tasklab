import { TaskStatus, TaskTabs } from '@tasklab/ui';
import { useState } from 'react';
import { Tab } from '@headlessui/react';

import { TaskFullScreen } from '../full-screen/TaskFullScreen';
import { TaskMoreOptions } from './TaskMoreOptions';

type AllStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

interface Status {
	taskStatus: AllStatus;
}

export const TaskNav = ({ taskStatus }: Status) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="mb-10 flex items-center justify-between pr-8">
				<TaskStatus taskStatus={taskStatus} />
				<div className="flex space-x-3">
					<Tab.List className="flex space-x-3">
						<TaskTabs />
					</Tab.List>
					<TaskMoreOptions setIsOpen={setIsOpen} />
				</div>
			</div>
			<TaskFullScreen isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
};
