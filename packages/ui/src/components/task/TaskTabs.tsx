import { Tab } from '@headlessui/react';
import { Fragment, ReactElement, ReactPropTypes } from 'react';
import { DocumentTextIcon } from '../../icons/DocumentTextIcon';
import { MessagesIcon } from '../../icons/MessagesIcon';

interface Selected {
	selected: boolean;
}

export const TaskTabs = () => {
	const tabs = [
		{ key: 'task', icon: <DocumentTextIcon /> },
		{ key: 'comments', icon: <MessagesIcon /> },
	];

	const active = ({ selected }: Selected): string =>
		selected ? 'task-tab-active' : 'icon-button icon-button-hover';

	return (
		<>
			{tabs.map((tab: any) => (
				<Fragment key={tab.key}>
					<Tab className={active}>{tab.icon}</Tab>
				</Fragment>
			))}
		</>
	);
};
