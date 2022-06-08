import { SendIcon } from '@tasklab/ui';
import { Field, Form, Formik } from 'formik';

export const CreateComment = () => {
	const handlerOnSubmit = async (values: { comment: string }) =>
		console.log(values);

	return (
		<>
			<Formik initialValues={{ comment: '' }} onSubmit={handlerOnSubmit}>
				<Form className="bg-300-light my-auto flex w-full overflow-hidden rounded-2xl">
					<div className="flex-auto">
						<Field
							className="placeholder:text-100-light flex h-12 w-full bg-transparent px-4 text-lg"
							id="comment"
							name="comment"
							type="text"
							placeholder="Add a comment..."
						/>
					</div>
					<button
						type="submit"
						className="text-100-light flex h-12 w-12 items-center justify-center rounded-2xl"
					>
						<SendIcon active={true} />
					</button>
				</Form>
			</Formik>
		</>
	);
};
