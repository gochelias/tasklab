import { Tab } from '@headlessui/react';
import { TaskInfo } from './TaskInfo';

export const Panels = () => {
	const panels = [
		{ key: 'task', component: <TaskInfo /> },
		{ key: 'comments', component: 'comments' },
	];

	return (
		<>
			{panels.map((panel: any) => (
				<Tab.Panel key={panel.key}>{panel.component}</Tab.Panel>
			))}
		</>
	);
};
