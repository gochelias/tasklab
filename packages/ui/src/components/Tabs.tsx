import { Tab } from '@headlessui/react';
import { ReactElement } from 'react';

interface Tabs {
	label: string;
	icon?: ReactElement;
}

interface Selected {
	selected: boolean;
}

export const Tabs = ({ label, icon }: Tabs) => {
	const active = ({ selected }: Selected) =>
		selected ? 'tab tab-active' : 'tab';

	return (
		<Tab className={active}>
			<div className="flex space-x-3">
				{icon}
				<span className="leading-none m-auto">{label}</span>
			</div>
		</Tab>
	);
};
