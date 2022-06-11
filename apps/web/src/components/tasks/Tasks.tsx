import { MessagesIcon, MoreIcon } from '@tasklab/ui';
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
					<div className="dark:border-300-dark border-300-light flex h-48 w-80 flex-col justify-between rounded-2xl border-2 p-4">
						<div className="flex flex-col space-y-4">
							<div className="flex items-center justify-between">
								<div className="bg-blue-10 rounded-lg px-2 py-1">
									<p className="text-blue-light dark:text-blue-dark text-sm opacity-100">
										In Progress
									</p>
								</div>
								<div>
									<MoreIcon />
								</div>
							</div>
							<p className="font-semibold">{task.title}</p>
						</div>
						<div className="space-y-3">
							<div className="flex -space-x-1.5 ">
								<AvatarsStacked
									assigned={task.assignedTo}
									max={10}
								/>
							</div>
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
