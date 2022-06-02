interface TaskStatus {
	taskStatus: string;
}

interface Status {
	color: string;
	name: string;
}

interface AllStatus {
	[key: string]: Status;
	NOT_STARTED: Status;
	IN_PROGRESS: Status;
	COMPLETED: Status;
}

export const TaskStatus = ({ taskStatus }: TaskStatus) => {
	const allStatus: AllStatus = {
		NOT_STARTED: {
			color: 'bg-200-light ring-200-light/50 dark:bg-200-dark dark:ring-200-dark/50',
			name: 'Not Started',
		},

		IN_PROGRESS: {
			color: 'bg-blue-light ring-blue-light/50 dark:bg-blue-dark dark:ring-blue-dark/50',
			name: 'In Progress',
		},

		COMPLETED: {
			color: 'bg-green-light ring-green-light/50 dark:bg-green-dark dark:ring-green-darkht/50',
			name: 'Completed',
		},
	};

	const status = allStatus[taskStatus];

	return (
		<>
			<div className="task-status">
				<div className={`task-status-circles ${status.color}`} />
				<p>{status.name}</p>
			</div>
		</>
	);
};
