import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { CreateTaskForm } from './CreateTaskForm';

export const ModalCreateTask = ({ isOpen, setIsOpen }: any) => {
	const closeModal = () => setIsOpen(false);

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					onClose={closeModal}
					className="relative z-50 overflow-hidden"
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
						<div
							className="bg-slate-dark/50 fixed inset-0 dark:bg-[#000]/50"
							aria-hidden="true"
						/>
					</Transition.Child>
					<div className="fixed inset-0 mx-auto flex h-full w-1/2 items-center justify-center">
						<Transition.Child
							as={Fragment}
							enter="ease-in-out linear duration-300"
							enterFrom="opacity-0 translate-y-full"
							enterTo="opacity-100 translate-y-0"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-full"
						>
							<Dialog.Panel className="flex h-5/6 w-2/3 items-center justify-center">
								<CreateTaskForm setOpen={setIsOpen} />
								{/* <div className="fixed flex inset-0 items-center justify-center">
									<button
										onClick={closeModal}
										className="px-4 py-3 bg-[#007AFF] rounded-2xl text-white"
									>
										Cancel
									</button>
								</div> */}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
