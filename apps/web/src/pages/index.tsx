import { Fragment } from 'react';
import { TaskPreview } from '../components/task/TaskPreview';
import { Tasks } from '../components/task/Tasks';

export default function Web() {
	return (
		<Fragment>
			<div className="flex h-full w-full flex-auto">
				<div className="flex w-min h-min flex-auto flex-wrap gap-8 p-6 ">
					<Tasks />
				</div>
				<div className="task-preview-container">
					<TaskPreview />
				</div>
			</div>
		</Fragment>
	);
}
