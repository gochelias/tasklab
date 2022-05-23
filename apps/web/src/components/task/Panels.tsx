import { Tab } from '@headlessui/react';
import { Task } from './Task';

export const Panels = () => {
	const panels = [
		{ key: 'task', component: <Task /> },
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
