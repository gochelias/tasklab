import { Tab } from '@headlessui/react';

export const KeyBindsPanel = () => (
	<>
		<Tab.Panel className="h-full w-full p-8">
			<p className="mb-8 text-3xl font-semibold leading-none text-slate-700 dark:text-slate-200">
				Keybinds
			</p>
			<p className="mb-3 text-base font-medium uppercase text-slate-400 dark:text-slate-500">
				default keybinds
			</p>
			<div className="divide-y-2 divide-slate-100 dark:divide-slate-700">
				<div className="flex items-center justify-between py-6">
					<p className="leading-none text-slate-500 dark:text-slate-400">
						Command palette
					</p>
					<div className="flex space-x-1">
						<div className="w-min rounded-md border-b-4 border-slate-500 bg-slate-300 py-1 px-2 text-xs font-semibold leading-none text-slate-700">
							CMD
						</div>
						<div className="w-min rounded-md border-b-4 border-slate-500 bg-slate-300 py-1 px-2 text-xs font-semibold leading-none text-slate-700">
							K
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between py-6">
					<p className="leading-none text-slate-500 dark:text-slate-400">
						Cancel
					</p>
					<div className="w-min rounded-md border-b-4 border-slate-500 bg-slate-300 py-1 px-2 text-xs font-semibold leading-none text-slate-700">
						ESC
					</div>
				</div>
			</div>
		</Tab.Panel>
	</>
);
