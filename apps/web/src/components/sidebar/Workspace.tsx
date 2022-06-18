import { Menu } from '@headlessui/react';
import { Fragment } from 'react';

const workspaces = [
	{
		id: '1',
		name: 'Workspace',
	},
	{
		id: '2',
		name: 'Workspace',
	},
	{
		id: '3',
		name: 'Workspace',
	},
];

export const Workspace = () => (
	<>
		<Menu as="div" className="relative z-50">
			<Menu.Button className=" flex h-20 w-full items-center px-4 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800">
				<div className="bg relative mr-3 h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-600"></div>
				<p className="h-7 w-48 overflow-hidden truncate text-left text-slate-700 dark:text-slate-200">
					Workspace Name
				</p>
			</Menu.Button>
			<Menu.Items className="dark:shadow-slate-dark absolute mx-4 w-72 space-y-2 rounded-3xl bg-white p-2 shadow-xl shadow-slate-300 dark:bg-slate-800 dark:shadow-xl">
				{workspaces.map((workspace: any) => (
					<Fragment key={workspace.id}>
						<Menu.Item>
							<button
								className={`${
									workspace.id === '1'
										? 'bg-blue-500 text-white hover:bg-blue-500'
										: 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
								} flex w-full items-center space-x-2 rounded-2xl px-4 py-3  `}
							>
								<div className="bg dark: relative mr-3 h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-600"></div>
								<p className="h-7 w-48 overflow-hidden truncate text-left font-semibold">
									Workspace Name
								</p>
							</button>
						</Menu.Item>
					</Fragment>
				))}
				<Menu.Item>
					{({ active }: any) => (
						<button
							className={`${
								active && 'bg-slate-100 dark:bg-slate-700'
							} flex h-16 w-full items-center justify-center space-x-2 rounded-2xl border-2 border-slate-100 px-4 py-3 text-blue-500 dark:border-slate-700`}
						>
							Create workspace
						</button>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	</>
);
