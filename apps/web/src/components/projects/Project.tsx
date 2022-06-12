import { AvatarsStacked } from '../tasks/AvatarStacked';

export const Project = () => {
	const img =
		'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80';

	const assigned = [
		{ id: '1', avatar: img },
		{ id: '2', avatar: img },
	];

	return (
		<>
			<div className="h-full px-16">
				<p className="py-4 text-[#A0AEC0]">
					Projects {'>'} Project Title
				</p>
				<p className="text-6xl font-semibold">Project Title</p>
				<div className="flex space-x-10 py-4 text-[#A0AEC0]">
					<p>Private</p>
					<a
						href=""
						className="hover:underline hover:decoration-blue-500 hover:decoration-2"
					>
						link
					</a>
					<p>total tasks</p>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center -space-x-2">
						<AvatarsStacked
							assigned={assigned}
							max={5}
							isPreview={true}
						/>
					</div>
					<div className="space-x-4">
						<button className="rounded-2xl border-2 border-[#EDF2F7] py-3 px-4 text-[#A0AEC0]">
							Filter
						</button>
						<button className="rounded-2xl border-2 border-[#EDF2F7] py-3 px-4 text-[#A0AEC0]">
							View
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
