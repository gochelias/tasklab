import { CalendarIcon, CategoryIcon } from '@tasklab/ui';
import { Menu } from '@headlessui/react';

export const View = () => (
	<>
		<Menu as="div" className="relative inline-block text-left">
			<Menu.Button className="active:bg-400-light flex items-center rounded-2xl border-2 border-[#EDF2F7] py-3 px-4 text-[#A0AEC0]">
				<CategoryIcon className="mr-3" />
				View
			</Menu.Button>
			<Menu.Items className="absolute right-0 mt-2 w-44 rounded-3xl p-2 text-slate-400 shadow-lg shadow-slate-200">
				<Menu.Item>
					{({ active }: any) => (
						<button
							className={`${
								active && 'bg-400-light'
							} flex w-full items-center space-x-2 rounded-2xl px-4 py-3`}
						>
							<CategoryIcon className="mr-3" />
							Grid
						</button>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }: any) => (
						<button
							className={`${
								active && 'bg-400-light'
							} flex w-full items-center space-x-2 rounded-2xl px-4 py-3`}
						>
							Rows
						</button>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }: any) => (
						<button
							className={`${
								active && 'bg-400-light'
							} flex w-full items-center space-x-2 rounded-2xl px-4 py-3`}
						>
							<CalendarIcon className="mr-3" />
							Timeline
						</button>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	</>
);
