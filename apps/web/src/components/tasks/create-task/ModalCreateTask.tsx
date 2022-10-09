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
							className="bg-slate-dark/60 fixed inset-0 dark:bg-[#000]/70"
							aria-hidden="true"
						/>
					</Transition.Child>
					<div className="fixed inset-0 mx-auto flex h-full w-1/2 items-center justify-center">
						<Transition.Child
							as={Fragment}
							enter="ease-in-out linear duration-200"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="flex h-5/6 w-2/3 items-center justify-center">
								<CreateTaskForm setOpen={setIsOpen} />
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
