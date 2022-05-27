import { Menu } from '@headlessui/react';
import { AddSquareIcon } from '@tasklab/ui';
import { useState } from 'react';
import { ModalCreateTask } from '../task/create-task/ModalCreateTask';
import { ItemCreateNew } from './ItemCreateNew';

export const CreateNew = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="relative">
				<Menu as="div" className="relative inline-block text-left z-20">
					<Menu.Button className="create-new">
						<AddSquareIcon className="mr-3" active={true} />
						Create New
					</Menu.Button>

					<Menu.Items>
						<div className="items-create-new">
							<ItemCreateNew
								label="Task"
								setOpen={setIsOpen}
								icon={<AddSquareIcon className="mr-3" />}
							/>
						</div>
					</Menu.Items>
				</Menu>
				<ModalCreateTask isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</>
	);
};
