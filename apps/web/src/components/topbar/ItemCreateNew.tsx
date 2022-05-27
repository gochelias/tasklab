import { Menu } from '@headlessui/react';
import { Dispatch, ReactElement, SetStateAction } from 'react';

interface Item {
	icon: ReactElement;
	label: string;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

interface ItemActive {
	active: boolean;
}

export const ItemCreateNew = ({ icon, label, setOpen }: Item) => {
	const openModal = () => setOpen(true);

	return (
		<>
			<Menu.Item>
				{({ active }: ItemActive) => (
					<button
						onClick={openModal}
						className={`${
							active && 'bg-[#f2f2f7]'
						} flex w-full items-center px-4 py-3 rounded-2xl`}
					>
						{icon}
						{label}
					</button>
				)}
			</Menu.Item>
		</>
	);
};
