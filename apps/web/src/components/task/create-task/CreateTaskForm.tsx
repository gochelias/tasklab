import { CalendarIcon, ProfileUserIcon, TagIcon } from '@tasklab/ui';
import { Field, Form, Formik, FormikHelpers } from 'formik';

export const CreateTaskForm = ({ setOpen }: any) => {
	const closeModal = () => setOpen(false);

	interface Values {
		title: string;
		description: string;
	}

	const initialValues: Values = {
		title: '',
		description: '',
	};

	const onSubmit = async (
		values: Values,
		{ setSubmitting }: FormikHelpers<Values>,
	): Promise<void> => {
		setSubmitting(false);
	};

	return (
		<>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				<Form className="text-lg">
					<Field
						className="text-3xl font-semibold"
						placeholder="Title"
						id="title"
						name="title"
						type="text"
						autoFocus={true}
					/>
					<div className="space-y-5 my-8 text-[#8E8E93]">
						<div className="flex items-center space-x-5">
							<CalendarIcon />
							<div>
								<label>Starts at </label>
								<Field
									className="text-black underline decoration-[#D1D1D6]"
									id="starts-at"
									name="starts-at"
									type="date"
								/>
								<label>Ends at </label>
								<Field
									className="text-black underline decoration-[#D1D1D6]"
									id="ends-at"
									name="ends-at"
									type="date"
								/>
							</div>
						</div>
						<div className="flex items-center space-x-5">
							<ProfileUserIcon />
							<button className=" px-3 h-10 rounded-xl text-base border-2 border-[#f2f2f7]">
								+ Invite
							</button>
						</div>
						<div className="flex items-center space-x-5">
							<TagIcon />
							<button className="px-3 h-10 rounded-xl text-base border-2 border-[#f2f2f7]">
								+ Add
							</button>
						</div>
					</div>
					<Field
						className="w-full h-80 my-8 border-2 border-[#f2f2f7] rounded-2xl p-4"
						id="description"
						name="description"
						component="textarea"
						placeholder="Write a description..."
					/>
					<div className="flex flex-row space-x-4 h-12">
						<button
							className="w-full rounded-2xl bg-[#E5E5EA]"
							onClick={closeModal}
						>
							Cancel
						</button>
						<button
							className="bg-[#007AFF] w-full rounded-2xl text-white"
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
