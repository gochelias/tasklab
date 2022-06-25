import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export const CommandPalette = ({ isOpen, setIsOpen }: any) => (
	<>
		<Transition show={isOpen}>
			<Dialog
				onClose={() => setIsOpen(false)}
				className="fixed inset-0 z-50 pt-[10vh] text-lg"
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
					<Dialog.Overlay className="fixed inset-0 bg-slate-200/75 dark:bg-slate-900/75" />
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="dark:shadow-slate-dark relative mx-auto max-w-4xl rounded-3xl border-slate-700 bg-white p-2 shadow-xl shadow-slate-300 dark:bg-slate-700 dark:shadow-lg">
						<input
							type="text"
							name=""
							id=""
							placeholder="Search"
							className="h-14 w-full rounded-2xl bg-transparent px-4 text-xl text-slate-700 placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
						/>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	</>
);
