import { Fragment } from 'react';
import { TaskPreview } from '../components/task/TaskPreview';
/* import { Tasks } from '../components/task/Tasks'; */
import { Topbar } from '../components/topbar/Topbar';

export default function Web() {
	return (
		<Fragment>
			<div className="flex h-full w-full flex-auto">
				<div className="relative flex-auto">
					<Topbar />
					<div className="h-full w-full pt-20">
						<div className="h-full">content</div>
					</div>
					{/* <div className="flex h-full w-full flex-auto flex-wrap gap-8 p-6 pt-20">
						<Tasks />
					</div> */}
				</div>
				<div className="task-preview-container">
					<TaskPreview />
				</div>
			</div>
		</Fragment>
	);
}
