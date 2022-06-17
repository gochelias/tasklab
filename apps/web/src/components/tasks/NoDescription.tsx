import { DocumentTextIcon } from '@tasklab/ui';

export const NoDescription = () => (
	<>
		<div className="flex flex-col items-center space-y-5 text-slate-300 dark:text-slate-600">
			<DocumentTextIcon size={36} />
			<p className="text-xl">No Description</p>
		</div>
	</>
);
