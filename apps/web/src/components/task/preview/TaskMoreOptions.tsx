import { MaximizeIcon, MoreIcon } from '@tasklab/ui';
import { Menu } from '@headlessui/react';

export const TaskMoreOptions = ({ setIsOpen }: any) => {
	const openFullScreen = () => setIsOpen(true);

	return (
		<>
			<Menu as="div" className="relative z-10">
				<Menu.Button className="icon-button icon-button-hover">
					<MoreIcon className="rotate-90" />
				</Menu.Button>
				<Menu.Items className="dark:bg-400-dark text-100-light dark:text-100-dark absolute right-0 mt-4 w-64 space-y-2 rounded-3xl p-2 shadow-lg">
					<Menu.Item>
						{({ active }: any) => (
							<button
								className={`${
									active && 'bg-400-light'
								} flex w-full items-center space-x-2 rounded-2xl px-4 py-3`}
								onClick={openFullScreen}
							>
								<MaximizeIcon className="mr-3" />
								Full Screen
							</button>
						)}
					</Menu.Item>
				</Menu.Items>
			</Menu>
		</>
	);
};
