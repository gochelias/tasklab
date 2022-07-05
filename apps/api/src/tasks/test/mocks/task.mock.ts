import { Task, TaskStatus } from '@prisma/client';
import { UpdateTaskDto } from '../../dto/update-task.dto';
import { CreateTaskDto } from '../../dto/create-task.dto';

export const mockTaskId = '01234567890123456789';

export const mockTask: Task = {
	id: '01234567890123456789',
	title: 'New Task',
	description: 'Creating a new task',
	authorId: '98765432109876543210',
	status: TaskStatus.NOT_STARTED,
	startsAt: new Date('2022-04-14T19:26:30.435Z'),
	endsAt: new Date('2022-04-14T19:26:30.435Z'),
	createdAt: new Date('2022-04-14T19:26:30.435Z'),
	updatedAt: new Date('2022-04-14T19:26:30.435Z'),
};

export const mockTasks: Task[] = [
	{
		id: '01234567890123456789',
		title: 'New Task',
		description: 'Creating a new task',
		authorId: '98765432109876543210',
		status: TaskStatus.NOT_STARTED,
		startsAt: new Date('2022-04-14T19:26:30.435Z'),
		endsAt: new Date('2022-04-14T19:26:30.435Z'),
		createdAt: new Date('2022-04-14T19:26:30.435Z'),
		updatedAt: new Date('2022-04-14T19:26:30.435Z'),
	},
	{
		id: '98765432109876543210',
		title: 'New Task',
		description: 'Creating a new task',
		authorId: '01234567890123456789',
		status: TaskStatus.NOT_STARTED,
		startsAt: new Date('2022-04-14T19:26:30.435Z'),
		endsAt: new Date('2022-04-14T19:26:30.435Z'),
		createdAt: new Date('2022-04-14T19:26:30.435Z'),
		updatedAt: new Date('2022-04-14T19:26:30.435Z'),
	},
];

export const mockCreateTaskDto: CreateTaskDto = {
	title: 'New Task',
	description: 'Creating a new task',
	authorId: '01234567890123456789',
	assignedTo: ['98765432109876543210'],
	tags: ['01234567890123456789'],
	startsAt: new Date('2022-04-14T19:26:30.435Z'),
	endsAt: new Date('2022-04-14T19:26:30.435Z'),
};

export const mockUpdateTaskDto: UpdateTaskDto = {
	title: 'New Task',
	description: 'Creating a new task',
	assignedTo: ['98765432109876543210'],
	startsAt: new Date('2022-04-14T19:26:30.435Z'),
	endsAt: new Date('2022-04-14T19:26:30.435Z'),
	status: TaskStatus.IN_PROGRESS,
};
