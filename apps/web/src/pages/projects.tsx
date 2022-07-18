import { ProjectCard } from '../components/projects/ProjectCard';

const Projects = () => {
	const a = '';

	return (
		<div className="dark:bg-salte-900 h-screen w-full">
			<div className="grid h-full grid-flow-row auto-rows-min grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-8 p-8">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
};

export default Projects;
