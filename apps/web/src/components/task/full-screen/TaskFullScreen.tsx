import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { TaskComments } from '../TaskComments';
import { TaskDescription } from '../TaskDescription';

export const TaskFullScreen = ({ isOpen, setIsOpen }: any) => {
	const closeFullScreen = () => setIsOpen(false);

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					onClose={closeFullScreen}
					className="relative z-50"
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
						<div className="fixed inset-0 flex items-center justify-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Dialog.Panel className="h-full w-full bg-white py-4 dark:bg-black">
									<div className="relative mx-auto flex h-full w-11/12">
										<div className="h-full w-1/4 rounded-2xl bg-white">
											Some info
										</div>
										<div className="dark:border-300-dark relative h-full max-w-[977.783px] flex-auto overflow-hidden rounded-2xl border-2 border-slate-100">
											<div className="absolute flex h-20 w-full max-w-[977.783px] items-center border-b-2 border-slate-100 p-4">
												<p className="text-3xl font-semibold text-slate-700">
													Title Example
												</p>
											</div>
											<div className="h-full pt-20 pl-4">
												<TaskDescription description="Some description" />
											</div>
										</div>
										<div className="mb-4 w-1/3 pl-8">
											<div className="h-full pb-20 pt-4">
												<TaskComments />
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
};
