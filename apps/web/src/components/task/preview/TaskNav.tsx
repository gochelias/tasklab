import { MaximizeIcon, MoreIcon, TaskStatus, TaskTabs } from '@tasklab/ui';
import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { TaskFullScreen } from '../full-screen/TaskFullScreen';

type AllStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

interface Status {
	taskStatus: AllStatus;
}

export const TaskNav = ({ taskStatus }: Status) => {
	const [isOpen, setIsOpen] = useState(false);

	const openFullScreen = () => setIsOpen(true);

	return (
		<>
			<div className="mb-10 flex items-center justify-between pr-8">
				<TaskStatus taskStatus={taskStatus} />
				<div className="flex space-x-3">
					<Tab.List className="flex space-x-3">
						<TaskTabs />
					</Tab.List>
					<button
						className="icon-button icon-button-hover"
						onClick={openFullScreen}
					>
						<MaximizeIcon />
					</button>
					<button className="icon-button icon-button-hover">
						<MoreIcon className="rotate-90" />
					</button>
				</div>
			</div>
			<TaskFullScreen isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
};
