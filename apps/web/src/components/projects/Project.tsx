import Image from 'next/image';
import Scrollbars from 'react-custom-scrollbars';

import { AvatarsStacked } from '../tasks/AvatarStacked';
import { Tasks } from '../tasks/Tasks';
import { View } from './View';

export const Project = () => {
	const customThumb = () => (
		<div className="rounded-full bg-slate-300 dark:bg-slate-600" />
	);

	const img =
		'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80';

	const assigned = [
		{ id: '1', avatar: img },
		{ id: '2', avatar: img },
	];

	const projectImg = '';

	return (
		<>
			<div className="relative h-full pt-10">
				<div className="absolute w-full px-10">
					<div className="mb-4 flex items-center">
						{projectImg ? (
							<div className="relative mr-8 h-28 w-28 overflow-hidden rounded-2xl bg-slate-100 ring-2 ring-slate-100 dark:bg-slate-700 dark:ring-slate-700">
								<Image
									alt="img"
									layout="fill"
									src={projectImg}
								/>
							</div>
						) : (
							''
						)}
						<div>
							<p className="text-6xl font-semibold text-slate-700 dark:text-slate-200">
								Project Title
							</p>
							<div className="flex space-x-10 pt-4 text-slate-400">
								<p>Private</p>
								<a
									href=""
									className="hover:underline hover:decoration-blue-500 hover:decoration-2"
								>
									link
								</a>
								<p>total tasks</p>
							</div>
						</div>
					</div>
					<div className="flex w-full items-center justify-between pb-4">
						<div className="flex items-center -space-x-2">
							<AvatarsStacked
								assigned={assigned}
								max={5}
								isPreview={true}
							/>
						</div>
						<div className="flex space-x-4">
							<button className="rounded-2xl border-2 border-slate-100 py-3 px-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
								Filter
							</button>
							<View />
						</div>
					</div>
				</div>
				<div className="h-full pt-48">
					<Scrollbars
						renderThumbVertical={customThumb}
						universal={true}
					>
						<div className="grid h-max grid-flow-row auto-rows-min grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 px-10 pb-10 pt-6">
							<Tasks />
						</div>
					</Scrollbars>
				</div>
			</div>
		</>
	);
};
