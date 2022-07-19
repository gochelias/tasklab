import { useRouter } from 'next/router';
import { Project } from '../../components/projects/Project';
// import { TaskPreview } from '../../components/tasks/TaskPreview';

const ProjectId = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<div className="flex h-full w-full">
				<div className="flex-auto">
					<Project />
				</div>
				{/* <div className="task-preview-container">
					<TaskPreview />
				</div> */}
			</div>
		</>
	);
};

export default ProjectId;
