import { SendIcon } from '@tasklab/ui';
import { Field, Form, Formik } from 'formik';

export const CreateComment = () => {
	const handlerOnSubmit = async (values: { comment: string }) =>
		console.log(values);

	return (
		<>
			<Formik initialValues={{ comment: '' }} onSubmit={handlerOnSubmit}>
				<Form className="flex w-full space-x-4">
					<Field
						className="flex h-12 flex-auto rounded-2xl bg-slate-100 bg-transparent p-4 text-lg text-slate-700 ring-blue-500/40 placeholder:text-slate-400 focus:outline focus:outline-1 focus:outline-blue-500 focus:ring-4 dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-500"
						id="comment"
						name="comment"
						type="text"
						placeholder="Add a comment..."
					/>
					<button
						type="submit"
						className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-200 text-slate-600 hover:bg-blue-500 hover:text-white active:bg-blue-400 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-blue-500 dark:hover:text-white dark:active:bg-blue-400"
					>
						<SendIcon active={true} />
					</button>
				</Form>
			</Formik>
		</>
	);
};
