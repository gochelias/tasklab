import { MessagesIcon, Tabs } from '@tasklab/ui';
import { Tab } from '@headlessui/react';

export const TaskTabs = () => (
	<Tab.Group>
		<div className="flex">
			<Tab.List className="bg-[#f2f2f7] rounded-3xl p-2 space-x-2 mt-4 mx-auto inline-flex">
				<Tabs label="Description" />
				<Tabs label="Comments" icon={<MessagesIcon active={false} />} />
			</Tab.List>
		</div>
		<Tab.Panels className="mt-4 h-96 overflow-y-auto">
			<Tab.Panel>Description</Tab.Panel>
			<Tab.Panel>Comments</Tab.Panel>
		</Tab.Panels>
	</Tab.Group>
);
