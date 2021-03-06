import { Menu } from '@headlessui/react';
import { AddSquareIcon } from '@tasklab/ui';
import { useState } from 'react';
import { ModalCreateTask } from '../tasks/create-task/ModalCreateTask';
import { ItemCreateNew } from './ItemCreateNew';

export const CreateNew = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="relative">
				<Menu as="div" className="relative z-20 inline-block text-left">
					<Menu.Button className="create-new">
						<AddSquareIcon className="mr-3" active={true} />
						<p className="mb-0.5">Create New</p>
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
