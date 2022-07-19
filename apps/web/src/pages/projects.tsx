import Link from 'next/link';
import { Fragment } from 'react';
import { ProjectCard } from '../components/projects/ProjectCard';

const Projects = () => {
	const projects = [
		{
			id: '1',
			name: 'gochelias',
			image: 'https://avatars.githubusercontent.com/u/56095957?s=56&v=4',
			url: 'github.com/gochelias',
			tasks: 13,
			members: 8,
			progress: 86,
		},
	];

	return (
		<div className="dark:bg-salte-900 h-screen w-full">
			<div className="grid h-full grid-flow-row auto-rows-min grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-8 p-8">
				{projects.map((project: any) => (
					<Fragment key={project.id}>
						<Link href={`projects/${project.id}`}>
							<a>
								<ProjectCard
									name={project.name}
									image={project.image}
									url={project.url}
									tasks={project.tasks}
									members={project.members}
									progress={project.progress}
								/>
							</a>
						</Link>
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default Projects;
