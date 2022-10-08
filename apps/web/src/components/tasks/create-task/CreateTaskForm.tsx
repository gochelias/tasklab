import { CalendarIcon, ProfileUserIcon, TagIcon } from '@tasklab/ui';
import { Field, Form, Formik, FormikHelpers } from 'formik';

export const CreateTaskForm = ({ setOpen }: any) => {
	const closeModal = () => setOpen(false);

	interface Values {
		title: string;
		description: string;
		startsAt: Date;
		endsAt: Date;
	}

	const initialValues: Values = {
		title: '',
		description: '',
		startsAt: new Date(),
		endsAt: new Date(),
	};

	const onSubmit = async (
		values: Values,
		{ setSubmitting }: FormikHelpers<Values>,
	): Promise<void> => {
		setSubmitting(false);
		const res = {
			title: values.title,
			description: values.description,
			startsAt: values.startsAt,
			endsAt: values.endsAt,
		};
		console.log(res);
	};

	return (
		<>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				<Form className="flex h-full w-full flex-col rounded-3xl bg-white p-8 text-lg outline outline-1 outline-slate-50 dark:bg-slate-900 dark:outline-slate-700">
					<Field
						className="bg-transparent text-3xl font-semibold text-slate-700 placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
						placeholder="Title"
						id="title"
						name="title"
						type="text"
						autoFocus={true}
					/>
					<div className="my-8 space-y-5 text-slate-400 dark:text-slate-500">
						<div className="flex items-center space-x-5">
							<CalendarIcon />
							<div className="text-slate-500 dark:text-slate-400">
								<label>Starts at </label>
								<Field
									className="bg-transparent text-slate-400 underline decoration-slate-300 dark:text-slate-500 dark:decoration-slate-600"
									id="startsAt"
									name="startsAt"
									type="datetime-local"
								/>
								<label>Ends at </label>
								<Field
									className="dark:decoration-200-dark bg-transparent text-slate-400 underline decoration-slate-300 dark:text-slate-500"
									id="endsAt"
									name="endsAt"
									type="date"
								/>
							</div>
						</div>
						<div className="flex items-center space-x-5">
							<ProfileUserIcon />
							<button className="rounded-xl border-2 border-slate-100 px-3 py-2 text-base text-slate-500 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:active:bg-slate-700">
								+ Invite
							</button>
						</div>
						<div className="flex items-center space-x-5">
							<TagIcon />
							<button className="rounded-xl border-2 border-slate-100 px-3 py-2 text-base text-slate-500 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:active:bg-slate-700">
								+ Add
							</button>
						</div>
					</div>
					<Field
						className="my-8 w-full flex-auto rounded-2xl border-2 border-slate-100 bg-transparent p-4 text-xl text-slate-700 placeholder:text-slate-400 dark:border-slate-700 dark:text-slate-200 dark:placeholder:text-slate-500"
						id="description"
						name="description"
						component="textarea"
						placeholder="Write a description..."
					/>
					<div className="flex h-12 flex-row space-x-4">
						<button
							className="w-full rounded-2xl bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400"
							onClick={closeModal}
							type="button"
						>
							Cancel
						</button>
						<button
							className="w-full rounded-2xl bg-blue-500 text-white"
							type="submit"
						>
							Create
						</button>
					</div>
				</Form>
			</Formik>
		</>
	);
};
