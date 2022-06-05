import { Tab } from '@headlessui/react';

import { TaskDescription } from './TaskDescription';
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
					<Tab.Panel className="h-full pt-60">
						<TaskDescription description="Some description" />
					</Tab.Panel>
					<Tab.Panel className="h-full pb-20 pt-60">
						<TaskComments />
					</Tab.Panel>
				</Tab.Panels>
			</div>
		</Tab.Group>
	</>
);
