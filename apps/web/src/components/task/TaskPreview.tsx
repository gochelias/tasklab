import { Tab } from '@headlessui/react';

import { TaskInfo } from './TaskInfo';
import { TaskComments } from './TaskComments';
import { TaskNav } from './preview/TaskNav';
import { TaskHeader } from './preview/TaskHeader';

export const TaskPreview = () => (
	<>
		<Tab.Group>
			<div className="absolute w-full">
				<TaskNav taskStatus="NOT_STARTED" />
				<TaskHeader />
			</div>
			<div className="flex h-full w-full flex-col">
				<Tab.Panels className="h-full pt-24">
					<Tab.Panel className="h-full">
						<TaskInfo />
					</Tab.Panel>
					<Tab.Panel className="h-full">
						<TaskComments />
					</Tab.Panel>
				</Tab.Panels>
			</div>
		</Tab.Group>
	</>
);
