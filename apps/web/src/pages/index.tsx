import { SettingsIcon } from '@tasklab/ui';
import { Fragment } from 'react';
import { TaskPreview } from '../components/task/TaskPreview';

export default function Web() {
	return (
		<Fragment>
			<div className="flex h-full w-full flex-auto">
				<div className="flex-auto p-4">
					<div className="w-80 h-48 border-2 border-[#E5E5EA] dark:border-[#3A3A3C] rounded-2xl p-4 flex flex-col hover:bg-[#f2f2f7]">
						<div className="flex justify-between">
							<div className=" text-[#007AFF] dark:text-[#0A84FF] text-base">
								In Progress
							</div>
							<div>
								<SettingsIcon />
							</div>
						</div>
						<span className="font-semibold py-4 dark:text-[#f2f2f7]">
							Title Example
						</span>
					</div>
				</div>
				<div className="task-preview-container">
					<TaskPreview />
				</div>
			</div>
		</Fragment>
	);
}
