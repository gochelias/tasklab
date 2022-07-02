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
					<Dialog.Overlay className="bg-slate-dark fixed inset-0 bg-opacity-40 filter dark:bg-[#000] dark:bg-opacity-75" />
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
					<div className="dark:shadow-slate-dark relative mx-auto max-w-4xl overflow-hidden rounded-2xl border-slate-700 bg-white shadow-xl shadow-slate-600/25 outline outline-1 outline-slate-100 dark:bg-slate-900 dark:shadow-lg dark:outline-slate-700">
						<input
							type="text"
							name=""
							id=""
							placeholder="Search"
							className="w-full rounded-2xl bg-transparent px-6 py-4 text-xl text-slate-600 placeholder:text-slate-400 dark:text-slate-300 dark:placeholder:text-slate-500"
						/>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	</>
);
