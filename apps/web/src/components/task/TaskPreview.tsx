import { IconButton, MoreIcon } from '@tasklab/ui';
import { Tab } from '@headlessui/react';

import { Tabs } from './Tabs';
import { Panels } from './Panels';

export const TaskPreview = () => (
	<>
		<div className="h-full overflow-hidden">
			<Tab.Group>
				<div className="flex space-x-4 py-4 justify-end items-center">
					<Tab.List className="flex space-x-4">
						<Tabs />
					</Tab.List>
					<IconButton icon={<MoreIcon />} />
				</div>
				<Tab.Panels className="mt-4 h-96 overflow-y-auto ">
					<Panels />
				</Tab.Panels>
			</Tab.Group>
		</div>
	</>
);
