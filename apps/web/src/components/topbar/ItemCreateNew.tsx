import { Menu } from '@headlessui/react';
import { ReactElement } from 'react';

interface Item {
	icon: ReactElement;
	label: string;
}

interface ItemActive {
	active: boolean;
}

export const ItemCreateNew = ({ icon, label }: Item) => (
	<>
		<Menu.Item>
			{({ active }: ItemActive) => (
				<button
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
