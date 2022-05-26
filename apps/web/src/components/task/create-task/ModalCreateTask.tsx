import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export const ModalCreateTask = ({ isOpen, setIsOpen }: any) => {
	const closeModal = () => setIsOpen(false);

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" onClose={closeModal} className="relative z-10">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-200"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div
							className="fixed inset-0 bg-black/30"
							aria-hidden="true"
						/>
					</Transition.Child>
					<div className="fixed inset-0 flex items-center justify-center p-4">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-200"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="mx-auto w-1/4 h-3/4 rounded-3xl shadow-2xl bg-white">
								<div className="fixed flex inset-0 items-center justify-center">
									<button
										onClick={closeModal}
										className="px-4 py-3 bg-[#007AFF] rounded-2xl text-white"
									>
										Cancel
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
