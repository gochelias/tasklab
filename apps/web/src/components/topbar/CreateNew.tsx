import { Menu } from '@headlessui/react';
import { AddSquareIcon } from '@tasklab/ui';
import { ItemCreateNew } from './ItemCreateNew';

export const CreateNew = () => (
	<>
		<div className="relative">
			<Menu as="div" className="relative inline-block text-left ">
				<Menu.Button className="create-new">
					<AddSquareIcon className="mr-3" active={true} />
					Create New
				</Menu.Button>
				<Menu.Items className="items-create-new">
					<ItemCreateNew
						label="Task"
						icon={<AddSquareIcon className="mr-3" />}
					/>
				</Menu.Items>
			</Menu>
		</div>
	</>
);
