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
							active && 'bg-slate-100 dark:bg-slate-700'
						} flex w-full items-center rounded-2xl px-4 py-3`}
					>
						{icon}
						{label}
					</button>
				)}
			</Menu.Item>
		</>
	);
};
