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
			color: 'border-gray-600 after:bg-gray-300',
			name: 'Not Started',
		},

		IN_PROGRESS: {
			color: 'border-sky-600 after:bg-sky-300',
			name: 'In Progress',
		},

		COMPLETED: {
			color: 'border-green-600 after:bg-green-200',
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
