import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CreateTaskForm } from './CreateTaskForm';

export const ModalCreateTask = ({ isOpen, setIsOpen }: any) => {
	const closeModal = () => setIsOpen(false);

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" onClose={closeModal} className="relative z-50">
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
							className="fixed inset-0 bg-white"
							aria-hidden="true"
						/>
					</Transition.Child>
					<div className="fixed inset-0 flex items-center justify-center p-4">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="flex items-center justify-center w-full h-full">
								<div className="w-1/4 h-auto">
									<CreateTaskForm setOpen={setIsOpen} />
								</div>
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
