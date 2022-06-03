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
				<Form className="text-lg">
					<Field
						className="placeholder:text-200-light dark:placeholder:text-200-dark bg-transparent text-3xl font-semibold dark:text-white"
						placeholder="Title"
						id="title"
						name="title"
						type="text"
						autoFocus={true}
					/>
					<div className="text-100-light my-8 space-y-5">
						<div className="flex items-center space-x-5">
							<CalendarIcon />
							<div>
								<label>Starts at </label>
								<Field
									className="decoration-200-light dark:decoration-200-dark bg-transparent text-black underline dark:text-white "
									id="startsAt"
									name="startsAt"
									type="datetime-local"
								/>
								<label>Ends at </label>
								<Field
									className="decoration-200-light dark:decoration-200-dark bg-transparent text-black underline dark:text-white"
									id="endsAt"
									name="endsAt"
									type="date"
								/>
							</div>
						</div>
						<div className="flex items-center space-x-5">
							<ProfileUserIcon />
							<button className=" border-300-light dark:border-300-dark h-10 rounded-xl border-2 px-3 text-base">
								+ Invite
							</button>
						</div>
						<div className="flex items-center space-x-5">
							<TagIcon />
							<button className="border-300-light dark:border-300-dark h-10 rounded-xl border-2 px-3 text-base">
								+ Add
							</button>
						</div>
					</div>
					<Field
						className="border-300-light dark:border-300-dark placeholder:text-200-light dark:placeholder:text-200-dark my-8 h-80 w-full rounded-2xl border-2 bg-transparent p-4"
						id="description"
						name="description"
						component="textarea"
						placeholder="Write a description..."
					/>
					<div className="flex h-12 flex-row space-x-4">
						<button
							className="text-100-light dark:text-100-dark bg-300-light dark:bg-300-dark w-full rounded-2xl"
							onClick={closeModal}
							type="button"
						>
							Cancel
						</button>
						<button
							className="bg-blue-light dark:bg-blue-dark w-full rounded-2xl text-white"
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
