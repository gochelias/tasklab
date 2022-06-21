import { RadioGroup, Tab } from '@headlessui/react';
import { TickCircleIcon } from '@tasklab/ui';
import { useState } from 'react';

export const LanguagePanel = () => {
	const [lang, setLang] = useState('en');

	return (
		<>
			<Tab.Panel className="h-full w-full p-8">
				<p className="mb-8 text-3xl font-semibold leading-none text-slate-700 dark:text-slate-200">
					Language
				</p>
				<p className="mb-4 text-base font-medium uppercase text-slate-400 dark:text-slate-500">
					Choice a language
				</p>
				<RadioGroup
					value={lang}
					onChange={setLang}
					className="space-y-4"
				>
					<RadioGroup.Option value="en">
						{({ checked }) => (
							<div
								className={`${
									checked
										? 'ring-4 ring-blue-500'
										: 'ring-2 ring-slate-100 dark:ring-slate-700'
								} flex h-16 w-full items-center justify-between rounded-2xl p-4`}
							>
								<div className="flex items-center space-x-3">
									<div className="flex h-8 w-12 items-center justify-center rounded-lg text-4xl">
										🇺🇸
									</div>
									<p className="text-slate-700 dark:text-slate-200">
										English
										<span className="ml-3 text-slate-400 dark:text-slate-500">
											English
										</span>
									</p>
								</div>
								<div
									className={`${
										checked ? 'flex' : 'hidden'
									} text-blue-500`}
								>
									<TickCircleIcon active={true} />
								</div>
							</div>
						)}
					</RadioGroup.Option>
					<RadioGroup.Option value="es">
						{({ checked }) => (
							<div
								className={`${
									checked
										? 'ring-4 ring-blue-500'
										: 'ring-2 ring-slate-100 dark:ring-slate-700'
								} flex h-16 w-full items-center justify-between rounded-2xl p-4`}
							>
								<div className="flex items-center space-x-3">
									<div className="flex h-8 w-12 items-center justify-center rounded-lg text-4xl">
										🇲🇽
									</div>
									<p className="text-slate-700 dark:text-slate-200">
										Español
										<span className="ml-3 text-slate-400 dark:text-slate-500">
											Spanish
										</span>
									</p>
								</div>
								<div
									className={`${
										checked ? 'flex' : 'hidden'
									} text-blue-500`}
								>
									<TickCircleIcon active={true} />
								</div>
							</div>
						)}
					</RadioGroup.Option>
				</RadioGroup>
			</Tab.Panel>
		</>
	);
};
