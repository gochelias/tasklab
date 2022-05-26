import { Menu } from '@headlessui/react';
import { AddSquareIcon } from '@tasklab/ui';
import { useState } from 'react';
import { ModalCreateTask } from '../task/create-task/ModalCreateTask';
import { ItemCreateNew } from './ItemCreateNew';

export const CreateNew = () => {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(true);

	return (
		<>
			<div className="relative">
				<Menu as="div" className="relative inline-block text-left ">
					<Menu.Button className="create-new">
						<AddSquareIcon className="mr-3" active={true} />
						Create New
					</Menu.Button>

					<Menu.Items>
						<button
							type="button"
							onClick={openModal}
							className="items-create-new"
						>
							<ItemCreateNew
								label="Task"
								icon={<AddSquareIcon className="mr-3" />}
							/>
						</button>
					</Menu.Items>
				</Menu>
				<ModalCreateTask isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</>
	);
};
