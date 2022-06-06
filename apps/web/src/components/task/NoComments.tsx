import { MessagesIcon } from '@tasklab/ui';

export const NoComments = () => (
	<>
		<div className="text-200-light flex flex-col items-center space-y-5">
			<MessagesIcon size={36} />
			<p className=" text-xl">No comments</p>
		</div>
	</>
);
