import { useState } from 'react';
import { RadioGroup, Tab } from '@headlessui/react';
import { TickCircleIcon } from '@tasklab/ui';

export const AppearancePanel = () => {
	const [theme, setTheme] = useState('system');

	const root = window.document.documentElement;
	if (theme === 'dark') {
		root.classList.add('dark');
	} else if (theme === 'light') {
		root.classList.remove('dark');
	} else if (theme === 'system') {
		root.classList.remove('dark');
	}

	return (
		<>
			<Tab.Panel className="flex h-full flex-col p-8">
				<p className="mb-8 text-3xl font-semibold leading-none text-slate-700 dark:text-slate-200">
					Appearance
				</p>
				<p className="mb-3 text-base font-medium uppercase text-slate-400 dark:text-slate-500">
					theme
				</p>
				<RadioGroup
					value={theme}
					onChange={setTheme}
					className="flex space-x-10"
				>
					<RadioGroup.Option value="light">
						{({ checked }) => (
							<div className="space-y-2">
								<div
									className={`${
										checked
											? 'ring-4 ring-blue-500'
											: 'ring-2 ring-slate-100 dark:ring-slate-700'
									} relative flex h-24 w-32 items-end justify-end overflow-hidden rounded-2xl bg-slate-300 pt-5 pl-5 text-xl font-medium`}
								>
									<div className="h-full w-full rounded-tl-xl bg-white p-2 leading-none text-slate-700">
										Aa
									</div>
									<div
										className={`${
											checked ? 'flex' : 'hidden'
										} absolute m-2 text-blue-500`}
									>
										<TickCircleIcon active={true} />
									</div>
								</div>
								<p className="text-slate-700 dark:text-slate-200">
									Light
								</p>
							</div>
						)}
					</RadioGroup.Option>
					<RadioGroup.Option value="dark">
						{({ checked }) => (
							<div className="space-y-2">
								<div
									className={`${
										checked
											? 'ring-4 ring-blue-500'
											: 'ring-2 ring-slate-200'
									} relative flex h-24 w-32 items-end justify-end overflow-hidden rounded-2xl bg-slate-600 pt-5 pl-5 text-xl font-medium`}
								>
									<div className="h-full w-full rounded-tl-xl bg-slate-900 p-2 leading-none text-slate-200">
										Aa
									</div>
									<div
										className={`${
											checked ? 'flex' : 'hidden'
										} absolute m-2 text-blue-500`}
									>
										<TickCircleIcon active={true} />
									</div>
								</div>
								<p className="text-slate-700 dark:text-slate-200">
									Dark
								</p>
							</div>
						)}
					</RadioGroup.Option>
					<RadioGroup.Option value="system">
						{({ checked }) => (
							<div className="space-y-2">
								<div
									className={`${
										checked
											? 'ring-4 ring-blue-500'
											: 'ring-2 ring-slate-100 dark:ring-slate-700'
									} flex h-24 w-32 overflow-hidden rounded-2xl text-xl font-medium`}
								>
									<div className="flex w-full bg-slate-300 pt-5 pl-5">
										<p className="h-full w-full rounded-tl-xl bg-white p-2 leading-none text-slate-700">
											Aa
										</p>
									</div>
									<div className="relative flex w-full bg-slate-600 pt-5 pl-5">
										<p className="h-full w-full rounded-tl-xl bg-slate-900 p-2 leading-none text-slate-200">
											Aa
										</p>
										<div
											className={`${
												checked ? 'flex' : 'hidden'
											} absolute bottom-0 right-0 m-2 text-blue-500`}
										>
											<TickCircleIcon active={true} />
										</div>
									</div>
								</div>
								<p className="text-slate-700 dark:text-slate-200">
									Auto
								</p>
							</div>
						)}
					</RadioGroup.Option>
				</RadioGroup>
			</Tab.Panel>
		</>
	);
};
