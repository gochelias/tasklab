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
					<div className="flex h-min flex-col rounded-2xl border-2 border-slate-100 p-4 transition-all duration-75 ease-out hover:bg-slate-50  dark:border-slate-700 dark:hover:bg-slate-800">
						<div className="flex items-center justify-between">
							<TaskStatus taskStatus="IN_PROGRESS" />
						</div>
						<div className="my-3">
							<p className="leading-none text-slate-400 dark:text-slate-500">
								Title Project
							</p>
							<p className="text-xl font-semibold text-slate-700 dark:text-slate-200">
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
								<p className="text-base text-slate-400 dark:text-slate-500">
									Progress
								</p>
								<p className="text-sm text-slate-500 dark:text-slate-400">
									45%
								</p>
							</div>
							<ProgressBar value={45} />
						</div>
						<div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
							<p className="flex text-base">
								<CalendarIcon className="mr-3" />
								Jan 24 10:30am
							</p>
							<div className="text-base font-normal">
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
