import { MoreIcon } from '@tasklab/ui';
import Image from 'next/image';

export const Tasks = () => {
	const tasks = [
		{ id: '1', title: 'Title example' },
		{ id: '2', title: 'Title example 2' },
		{ id: '3', title: 'Title example 3' },
		{ id: '4', title: 'Title example 4' },
		{ id: '5', title: 'Title example 4' },
		{ id: '6', title: 'Title example 4' },
	];

	return (
		<>
			{tasks.map((task: any) => (
				<div
					key={task.id}
					className="w-80 h-48 border-2 border-[#f2f2f7] dark:border-[#2C2C2E] rounded-2xl p-4 flex flex-col"
				>
					<div className="flex justify-between">
						<div className="bg-[rgb(0,122,255,0.1)] rounded-lg px-2">
							<span className="text-[#007AFF] opacity-100 dark:text-[#0A84FF] text-sm">
								In Progress
							</span>
						</div>
						<div>
							<MoreIcon />
						</div>
					</div>
					<span className="font-semibold py-4 dark:text-[#f2f2f7]">
						{task.title}
					</span>
					<div className="flex -space-x-2.5 ">
						<div className="w-7 h-7 rounded-full bg-white flex justify-center items-center relative">
							<Image
								className="w-6 h-6 rounded-full"
								alt="avatar"
								width={24}
								height={24}
								src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
							/>
						</div>
						<div className="w-7 h-7 rounded-full bg-white flex justify-center items-center relative">
							<Image
								className="rounded-full w-6 h-6"
								width={24}
								height={24}
								alt="avatar"
								src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
							/>
						</div>
						<div className="flex items-center justify-center w-7 h-7 text-xs font-medium text-black bg-[#f2f2f7] border-2 border-white rounded-full relative">
							+9
						</div>
					</div>
				</div>
			))}
		</>
	);
};
