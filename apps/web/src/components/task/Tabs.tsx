import { DocumentTextIcon, MessagesIcon } from '@tasklab/ui';
import { Tab } from '@headlessui/react';

export const Tabs = () => {
	const tabs = [
		{ key: 'task', component: <DocumentTextIcon /> },
		{ key: 'comments', component: <MessagesIcon /> },
	];

	return (
		<>
			{tabs.map((tab: any) => (
				<Tab
					key={tab.key}
					className={({ selected }: any) =>
						selected
							? 'icon-button icon-button-hover rounded-2xl w-12 h-12 ring-offset-2 ring-2 ring-[#E5E5EA]'
							: 'icon-button icon-button-hover'
					}
				>
					{tab.component}
				</Tab>
			))}
		</>
	);
};
