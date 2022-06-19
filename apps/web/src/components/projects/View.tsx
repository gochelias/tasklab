import { CalendarIcon, CategoryIcon, RowIcon } from '@tasklab/ui';
import { Menu } from '@headlessui/react';

export const View = () => (
	<>
		<Menu as="div" className="relative inline-block text-left">
			<Menu.Button className="flex items-center rounded-2xl border-2 border-slate-100 py-3 px-4 text-slate-500 active:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:active:bg-slate-700">
				<CategoryIcon className="mr-3" />
				View
			</Menu.Button>
			<Menu.Items className="dark:shadow-slate-dark absolute right-0 mt-2 w-44 rounded-3xl p-2 text-slate-500 shadow-lg shadow-slate-200 dark:bg-slate-800 dark:text-slate-400">
				<Menu.Item>
					{({ active }: any) => (
						<button
							className={`${
								active && 'bg-slate-100 dark:bg-slate-700'
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
								active && 'bg-slate-100 dark:bg-slate-700'
							} flex w-full items-center space-x-2 rounded-2xl px-4 py-3`}
						>
							<RowIcon className="mr-3" />
							Rows
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
							<CalendarIcon className="mr-3" />
							Timeline
						</button>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	</>
);
