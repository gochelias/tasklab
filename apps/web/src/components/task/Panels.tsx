import { Tab } from '@headlessui/react';
import { TaskComments } from './TaskComments';
import { TaskInfo } from './TaskInfo';

export const Panels = () => {
	const panels = [
		{ key: 'task', component: <TaskInfo /> },
		{ key: 'comments', component: <TaskComments /> },
	];

	return (
		<>
			{panels.map((panel: any) => (
				<Tab.Panel key={panel.key}>{panel.component}</Tab.Panel>
			))}
		</>
	);
};
