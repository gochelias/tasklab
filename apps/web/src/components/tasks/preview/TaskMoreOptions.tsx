import { EditIcon, MaximizeIcon, MoreIcon, TrashIcon } from '@tasklab/ui';
import { Menu } from '@headlessui/react';

export const TaskMoreOptions = ({ setIsOpen }: any) => {
	const openFullScreen = () => setIsOpen(true);

	return (
		<>
			<Menu as="div" className="relative z-10">
				<Menu.Button className="icon-button icon-button-hover">
					<MoreIcon className="rotate-90" active={true} />
				</Menu.Button>
				<Menu.Items className="dark:shadow-slate-dark absolute right-0 mt-4 w-64 space-y-2 rounded-3xl bg-white p-2 text-slate-500 shadow-2xl shadow-slate-300 outline outline-1 outline-slate-50 dark:bg-slate-800 dark:text-slate-400 dark:outline-slate-700">
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
						<button className="flex w-full items-center space-x-2 rounded-2xl px-4 py-3 text-red-500 hover:bg-red-500 hover:text-white">
							<TrashIcon className="mr-3" />
							Delete
						</button>
					</Menu.Item>
				</Menu.Items>
			</Menu>
		</>
	);
};
