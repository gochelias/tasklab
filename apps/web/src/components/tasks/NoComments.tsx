import { MessagesIcon } from '@tasklab/ui';

export const NoComments = () => (
	<>
		<div className="flex flex-col items-center space-y-5 text-slate-300 dark:text-slate-600">
			<MessagesIcon size={36} />
			<p className=" text-xl">No comments</p>
		</div>
	</>
);
