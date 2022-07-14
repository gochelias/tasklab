import { SendIcon } from '@tasklab/ui';
import { Field, Form, Formik } from 'formik';

export const CreateComment = () => {
	const handlerOnSubmit = async (values: { comment: string }) =>
		console.log(values);

	return (
		<>
			<Formik initialValues={{ comment: '' }} onSubmit={handlerOnSubmit}>
				<Form className="flex w-full space-x-2 overflow-hidden rounded-3xl border border-slate-200 p-2 dark:border-slate-700">
					<div className="flex-auto rounded-2xl bg-slate-100 dark:bg-slate-700">
						<Field
							className="flex h-12 w-full bg-transparent px-4 text-lg text-slate-700 placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
							id="comment"
							name="comment"
							type="text"
							placeholder="Add a comment..."
						/>
					</div>
					<button
						type="submit"
						className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-200"
					>
						<SendIcon active={true} />
					</button>
				</Form>
			</Formik>
		</>
	);
};
