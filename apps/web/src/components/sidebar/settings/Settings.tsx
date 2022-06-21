import { CloseSquareIcon } from '@tasklab/ui';
import { Fragment } from 'react';
import { Dialog, Tab, Transition } from '@headlessui/react';

import { SettingsTab } from './SettingsTab';
import { SettingsCategory } from './SettingsCategory';
import { AppearancePanel } from './AppearancePanel';

export const Settings = ({ isOpen, setIsOpen }: any) => {
	const closeSettings = () => setIsOpen(false);

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					onClose={closeSettings}
					className="relative z-50"
				>
					<div className="fixed inset-0 select-none text-lg">
						<Dialog.Panel className="relative flex h-screen w-full justify-center bg-white transition-colors duration-200 ease-linear dark:bg-slate-900">
							<div className="flex h-full w-1/2">
								<Tab.Group vertical>
									<Tab.List className="h-full space-y-3 border-r-2 border-slate-100 px-4 py-8 transition-colors duration-100 ease-linear dark:border-slate-700">
										<SettingsCategory name="user settings" />
										<SettingsTab tabName="Account" />
										<SettingsTab tabName="Profile" />
										<SettingsTab tabName="Integrations" />
										<SettingsCategory name="app settings" />
										<SettingsTab tabName="Appearance" />
										<SettingsTab tabName="Language" />
										<SettingsTab tabName="Notifications" />
										<SettingsTab tabName="Keybinds" />
									</Tab.List>
									<Tab.Panels className="w-full">
										<Tab.Panel>Account</Tab.Panel>
										<Tab.Panel>Profile</Tab.Panel>
										<Tab.Panel>Integrations</Tab.Panel>
										<AppearancePanel />
										<Tab.Panel>Language</Tab.Panel>
										<Tab.Panel>Notifications</Tab.Panel>
										<Tab.Panel>Keybinds</Tab.Panel>
									</Tab.Panels>
								</Tab.Group>
							</div>
							<button
								className="m-4 flex h-12 w-12 items-center justify-center rounded-2xl dark:text-slate-400 dark:hover:bg-slate-700"
								onClick={closeSettings}
							>
								<CloseSquareIcon active={true} />
							</button>
						</Dialog.Panel>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
