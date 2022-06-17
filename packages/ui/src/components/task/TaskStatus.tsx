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
			color: 'bg-slate-400 ring-slate-400/30 dark:bg-slate-500 dark:ring-slate-700',
			name: 'Not Started',
		},

		IN_PROGRESS: {
			color: 'bg-blue-500 ring-blue-500/30',
			name: 'In Progress',
		},

		COMPLETED: {
			color: 'bg-green-500 ring-green-500/30',
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
