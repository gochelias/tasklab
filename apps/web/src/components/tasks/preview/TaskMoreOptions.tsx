import { EditIcon, MaximizeIcon, MoreIcon, TrashIcon } from '@tasklab/ui';
import { Menu } from '@headlessui/react';

export const TaskMoreOptions = ({ setIsOpen }: any) => {
	const openFullScreen = () => setIsOpen(true);

	return (
		<>
			<Menu as="div" className="relative z-10">
				<Menu.Button className="icon-button icon-button-hover">
					<MoreIcon className="rotate-90" />
				</Menu.Button>
				<Menu.Items className="dark:text-100-dark absolute right-0 mt-4 w-64 space-y-2 rounded-3xl bg-white p-2 text-slate-500 shadow-lg dark:bg-slate-800">
					<Menu.Item>
						{({ active }: any) => (
							<button
								className={`${
									active && 'bg-slate-100 dark:bg-slate-700'
								} flex w-full items-center space-x-2 rounded-2xl px-4 py-3`}
								onClick={openFullScreen}
							>
								<MaximizeIcon className="mr-3" />
								Full Screen
							</button>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }: any) => (
							<button
								className={`${
									active && 'bg-slate-100 dark:bg-slate-700'
								} flex w-full items-center space-x-2 rounded-2xl px-4 py-3`}
							>
								<EditIcon className="mr-3" />
								Edit
							</button>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }: any) => (
							<button
								className={`${
									active && 'bg-red-500 text-white'
								} flex w-full items-center space-x-2 rounded-2xl px-4 py-3`}
							>
								<TrashIcon className="mr-3" />
								Delete
							</button>
						)}
					</Menu.Item>
				</Menu.Items>
			</Menu>
		</>
	);
};
