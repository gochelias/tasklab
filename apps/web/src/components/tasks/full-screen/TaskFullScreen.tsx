import { Dialog, Transition } from '@headlessui/react';
import { CloseSquareIcon } from '@tasklab/ui';
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
								<Dialog.Panel className="relative h-full w-full bg-white py-4 dark:bg-slate-900">
									<button
										onClick={closeFullScreen}
										className="absolute right-0 mr-4 flex h-12 w-12 items-center justify-center rounded-2xl text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
									>
										<CloseSquareIcon active />
									</button>
									<div className="relative mx-auto flex h-full w-11/12">
										<div className="h-full w-1/4 rounded-2xl text-slate-700 dark:text-slate-200">
											Some info
										</div>
										<div className="relative h-full max-w-[977.783px] flex-auto overflow-hidden rounded-2xl border-2 border-slate-100 dark:border-slate-700">
											<div className="absolute flex h-20 w-full max-w-[977.783px] items-center border-b-2 border-slate-100 p-4 dark:border-slate-700">
												<p className="text-3xl font-semibold text-slate-700 dark:text-slate-200">
													Title Example
												</p>
											</div>
											<div className="h-full pt-20 pl-4 text-slate-700 dark:text-slate-200">
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
