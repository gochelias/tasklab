import { useRouter } from 'next/router';

const ProjectId = () => {
	const router = useRouter();
	const { id } = router.query;

	return <p>Project {id}</p>;
};

export default ProjectId;
