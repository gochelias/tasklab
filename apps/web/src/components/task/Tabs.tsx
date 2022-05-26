import { DocumentTextIcon, MessagesIcon } from '@tasklab/ui';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

interface Selected {
	selected: boolean;
}

export const Tabs = () => {
	const tabs = [
		{ key: 'task', component: <DocumentTextIcon /> },
		{ key: 'comments', component: <MessagesIcon /> },
	];

	const active = ({ selected }: Selected): string =>
		selected
			? 'task-tab-active after:content-["<br />"]'
			: 'icon-button icon-button-hover';

	return (
		<>
			{tabs.map((tab: any) => (
				<Fragment key={tab.key}>
					<Tab className={active}>{tab.component}</Tab>
				</Fragment>
			))}
		</>
	);
};
