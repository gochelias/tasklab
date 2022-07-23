import { CloseSquareIcon } from '@tasklab/ui';
import { Fragment } from 'react';
import { Dialog, Tab, Transition } from '@headlessui/react';

import { SettingsTab } from './SettingsTab';
import { SettingsCategory } from './SettingsCategory';
import { AppearancePanel } from './AppearancePanel';
import { LanguagePanel } from './LanguagePanel';
import { KeyBindsPanel } from './KeybindsPanel';

export const Settings = ({ isOpen, setIsOpen }: any) => {
	const closeSettings = () => setIsOpen(false);

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					onClose={closeSettings}
					className="relative z-50 transition-colors duration-200 ease-linear"
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-white dark:bg-slate-900" />
					</Transition.Child>
					<div className="fixed inset-0 select-none text-lg">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="flex h-screen w-full justify-center">
								<div className="flex h-full w-1/2">
									<Tab.Group vertical>
										<Tab.List className="h-full space-y-3 border-r-2 border-slate-100 px-4 py-8 transition-colors duration-200 ease-linear dark:border-slate-700">
											<SettingsCategory name="user settings" />
											<SettingsTab tabName="Profile" />
											<SettingsTab tabName="Account" />
											<SettingsTab tabName="Integrations" />
											<SettingsCategory name="app settings" />
											<SettingsTab tabName="Appearance" />
											<SettingsTab tabName="Language" />
											<SettingsTab tabName="Notifications" />
											<SettingsTab tabName="Keybinds" />
										</Tab.List>
										<Tab.Panels className="w-full">
											<Tab.Panel>Profile</Tab.Panel>
											<Tab.Panel>Account</Tab.Panel>
											<Tab.Panel>Integrations</Tab.Panel>
											<AppearancePanel />
											<LanguagePanel />
											<Tab.Panel>Notifications</Tab.Panel>
											<KeyBindsPanel />
										</Tab.Panels>
									</Tab.Group>
								</div>
								<div className="flex flex-col items-center space-y-3 pt-8">
									<button
										className="flex h-12 w-12 items-center justify-center rounded-2xl text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
										onClick={closeSettings}
									>
										<CloseSquareIcon active={true} />
									</button>
									<div className="w-min rounded-md border-b-4 border-slate-500 bg-slate-300 py-1 px-2 text-xs font-semibold leading-none text-slate-700">
										ESC
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
