import Image from 'next/image';

interface ProjectCardProps {
	name: string;
	image: string;
	url: string;
	tasks: number;
	members: number;
	progress: number;
}

export const ProjectCard = (props: ProjectCardProps) => (
	<>
		<div className="select-none rounded-2xl border-2 border-slate-100 dark:border-slate-700">
			<div className="mx-1.5 mt-1.5 flex h-24 items-center justify-between space-x-4 rounded-xl bg-slate-100 px-5 dark:bg-slate-700">
				<div className="flex items-center space-x-4">
					<div className="relative h-14 w-14 overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-600">
						<Image
							src={props.image}
							alt={props.name}
							layout="fill"
						/>
					</div>
					<p className="text-xl font-semibold">{props.name}</p>
				</div>
				<p className="text-2xl font-semibold text-slate-400">
					{props.progress}%
				</p>
			</div>
			<div className="m-4 space-y-1 text-slate-400 dark:text-slate-500">
				<p className="">{props.tasks} Tasks</p>
				<p className="">{props.members} Members</p>
			</div>
		</div>
	</>
);
