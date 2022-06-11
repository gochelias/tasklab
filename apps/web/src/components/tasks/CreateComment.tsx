import { SendIcon } from '@tasklab/ui';
import { Field, Form, Formik } from 'formik';

export const CreateComment = () => {
	const handlerOnSubmit = async (values: { comment: string }) =>
		console.log(values);

	return (
		<>
			<Formik initialValues={{ comment: '' }} onSubmit={handlerOnSubmit}>
				<Form className="bg-300-light flex w-full overflow-hidden rounded-3xl p-2">
					<div className="flex-auto">
						<Field
							className="placeholder:text-200-light flex h-12 w-full bg-transparent px-4 text-lg"
							id="comment"
							name="comment"
							type="text"
							placeholder="Add a comment..."
						/>
					</div>
					<button
						type="submit"
						className="bg-200-light flex h-12 w-12 items-center justify-center rounded-2xl text-white"
					>
						<SendIcon active={true} />
					</button>
				</Form>
			</Formik>
		</>
	);
};
