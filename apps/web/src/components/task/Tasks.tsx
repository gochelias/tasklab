import { MessagesIcon, MoreIcon } from '@tasklab/ui';
import Image from 'next/image';
import { Fragment } from 'react';

export const Tasks = () => {
	const img =
		'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80';

	interface Task {
		id: string;
		title: string;
		assignedTo: string[];
	}

	const tasks = [
		{
			id: '1',
			title: 'Title example',
			assignedTo: [img, img, img, img, img, img],
		},
		{
			id: '2',
			title: 'Title example',
			assignedTo: [img, img, img, img, img, img, img],
		},
		{
			id: '3',
			title: 'Title example',
			assignedTo: [img, img, img, img, img],
		},
		{
			id: '4',
			title: 'Title example',
			assignedTo: [img, img, img, img],
		},
	];

	const assigneesAvatars = (task: Task, min: number) =>
		task.assignedTo.length > min ? (
			<>
				{task.assignedTo.slice(-min).map((url: string) => (
					<Fragment key={task.id}>
						<div className="w-7 h-7 rounded-full bg-white flex justify-center items-center relative">
							<Image
								className="w-6 h-6 rounded-full"
								alt="avatar"
								width={24}
								height={24}
								src={url}
							/>
						</div>
					</Fragment>
				))}
				<div className="flex items-center justify-center w-7 h-7 text-xs font-medium text-black bg-[#f2f2f7] border-2 border-white rounded-full relative">
					+{task.assignedTo.length - min}
				</div>
			</>
		) : (
			task.assignedTo.map((a: any) => (
				<Fragment key={task.id}>
					<div className="w-7 h-7 rounded-full bg-white flex justify-center items-center relative">
						<Image
							className="w-6 h-6 rounded-full"
							alt="avatar"
							width={24}
							height={24}
							src={a}
						/>
					</div>
				</Fragment>
			))
		);

	return (
		<>
			{tasks.map((task: Task) => (
				<div
					key={task.id}
					className="w-80 h-48 border-2 border-[#f2f2f7] dark:border-[#2C2C2E] rounded-2xl p-4 flex flex-col justify-between"
				>
					<div className="flex flex-col space-y-4">
						<div className="flex justify-between items-center">
							<div className="bg-[rgb(0,122,255,0.1)] rounded-lg px-2 py-1">
								<p className="text-[#007AFF] opacity-100 dark:text-[#0A84FF] text-sm">
									In Progress
								</p>
							</div>
							<div>
								<MoreIcon />
							</div>
						</div>
						<p className="font-semibold dark:text-[#f2f2f7]">
							{task.title}
						</p>
					</div>
					<div className="space-y-3">
						<div className="flex -space-x-2.5 ">
							{assigneesAvatars(task, 5)}
						</div>
						<div className="text-[#8E8E93] text-base font-normal">
							<div className="flex space-x-2">
								<MessagesIcon /> <p>3</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};
