import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

export const SettingsTab = ({ tabName }: { tabName: string }) => (
	<>
		<Tab as={Fragment}>
			{({ selected }) => (
				<button
					className={`${
						selected
							? 'bg-blue-500 text-white'
							: 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
					} flex h-12 w-56 items-center rounded-2xl px-4`}
				>
					{tabName}
				</button>
			)}
		</Tab>
	</>
);
