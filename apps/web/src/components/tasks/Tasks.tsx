import {
	CalendarIcon,
	MessagesIcon,
	ProgressBar,
	TaskStatus,
} from '@tasklab/ui';
import { Fragment } from 'react';

import { AvatarsStacked } from './AvatarStacked';

export const Tasks = () => {
	const img =
		'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80';

	interface Task {
		id: string;
		title: string;
		assignedTo: any;
	}

	const tasks = [
		{
			id: '1',
			title: 'Title example',
			assignedTo: [
				{ id: '1', avatar: img },
				{ id: '2', avatar: img },
			],
		},
		{
			id: '2',
			title: 'Title example',
			assignedTo: [
				{ id: '1', avatar: img },
				{ id: '2', avatar: img },
			],
		},
	];

	return (
		<>
			{tasks.map((task: Task) => (
				<Fragment key={task.id}>
					<div className="dark:border-300-dark flex h-min flex-col rounded-2xl border-4 border-slate-100 p-4 transition-shadow duration-100 ease-linear hover:shadow-xl hover:shadow-slate-200">
						<div className="flex items-center justify-between">
							<TaskStatus taskStatus="IN_PROGRESS" />
						</div>
						<div className="my-3">
							<p className="text-100-light">Title Project</p>
							<p className="text-xl font-semibold">
								{task.title}
							</p>
						</div>
						<div className="flex -space-x-1.5 ">
							<AvatarsStacked
								assigned={task.assignedTo}
								max={10}
							/>
						</div>
						<div className="mt-4 mb-6">
							<div className="mb-1 flex items-center justify-between">
								<p className="dark:text-200-dark text-100-light text-base">
									Progress
								</p>
								<p className="dark:text-100-dark text-sm text-slate-600">
									45%
								</p>
							</div>
							<ProgressBar value={45} />
						</div>
						<div className="flex items-center justify-between">
							<p className="text-100-light flex text-base">
								<CalendarIcon className="mr-3" />
								Jan 24 10:30am
							</p>
							<div className="text-100-light dark:text-100-dark text-base font-normal">
								<div className="flex space-x-2">
									<MessagesIcon /> <p>3</p>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			))}
		</>
	);
};
