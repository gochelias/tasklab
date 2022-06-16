import { Menu } from '@headlessui/react';

export const Workspace = () => (
	<>
		<Menu as="div" className="relative z-50">
			<Menu.Button className=" flex h-20 w-full items-center px-4 font-semibold">
				<div className="bg relative mr-3 h-10 w-10 rounded-full bg-slate-200"></div>
				<p className="h-7 w-48 overflow-hidden truncate text-left">
					Workspace Name
				</p>
			</Menu.Button>
			<Menu.Items className="absolute -m-4 mx-4 w-72 space-y-2 rounded-3xl bg-white p-2 shadow-xl shadow-slate-300">
				<Menu.Item>
					{({ active }: any) => (
						<button
							className={`${active} flex w-full items-center space-x-2 rounded-2xl bg-blue-500 px-4 py-3 text-white`}
						>
							<div className="bg relative mr-3 h-10 w-10 rounded-full bg-slate-200"></div>
							<p className="h-7 w-48 overflow-hidden truncate text-left font-semibold">
								Workspace Name
							</p>
						</button>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }: any) => (
						<button
							className={`${
								active && 'bg-slate-100'
							} flex w-full items-center space-x-2 rounded-2xl px-4 py-3`}
						>
							<div className="bg relative mr-3 h-10 w-10 rounded-full bg-slate-200"></div>
							<p className="h-7 w-48 overflow-hidden truncate text-left font-semibold">
								Workspace Name
							</p>
						</button>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }: any) => (
						<button
							className={`${
								active && 'bg-slate-100'
							} flex w-full items-center justify-center space-x-2 rounded-2xl border-2 border-slate-100 px-4 py-3 text-blue-500`}
						>
							Create workspace
						</button>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	</>
);
