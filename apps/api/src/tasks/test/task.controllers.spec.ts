import { prismaMock } from '../../singleton';
import { findOneTask } from '../controllers/find-one-task.controller';
import { createTask } from '../controllers/create-task.controller';
import { findAllTask } from '../controllers/find-tasks.controller';
import { removeTask } from '../controllers/remove-task.controller';
import { updateTask } from '../controllers/update-task.controller';
import {
	mockTask,
	mockTasks,
	mockTaskId,
	mockUpdateTaskDto,
	mockCreateTaskDto,
} from './mocks/task.mock';

describe('Task Controllers', () => {
	it('should create new task (createTask)', async () => {
		prismaMock.task.create.mockResolvedValue(mockTask);

		await expect(
			createTask(mockCreateTaskDto, prismaMock),
		).resolves.toEqual({
			id: '01234567890123456789',
			title: 'New Task',
			description: 'Creating a new task',
			authorId: '98765432109876543210',
			status: 'NOT_STARTED',
			startsAt: new Date('2022-04-14T19:26:30.435Z'),
			endsAt: new Date('2022-04-14T19:26:30.435Z'),
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
		});
	});

	it('should return all task (findAllTask)', async () => {
		prismaMock.task.findMany.mockResolvedValue(mockTasks);
		await expect(findAllTask(prismaMock)).resolves.toEqual([
			{
				id: '01234567890123456789',
				title: 'New Task',
				description: 'Creating a new task',
				authorId: '98765432109876543210',
				status: 'NOT_STARTED',
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
				status: 'NOT_STARTED',
				startsAt: new Date('2022-04-14T19:26:30.435Z'),
				endsAt: new Date('2022-04-14T19:26:30.435Z'),
				createdAt: new Date('2022-04-14T19:26:30.435Z'),
				updatedAt: new Date('2022-04-14T19:26:30.435Z'),
			},
		]);
	});

	it('should find task by id (findOneTask)', async () => {
		prismaMock.task.findUnique.mockResolvedValue(mockTask);

		await expect(findOneTask(mockTaskId, prismaMock)).resolves.toEqual({
			id: '01234567890123456789',
			title: 'New Task',
			description: 'Creating a new task',
			authorId: '98765432109876543210',
			status: 'NOT_STARTED',
			startsAt: new Date('2022-04-14T19:26:30.435Z'),
			endsAt: new Date('2022-04-14T19:26:30.435Z'),
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
		});
	});

	it('should delete a task (removeTask)', async () => {
		prismaMock.task.delete.mockResolvedValue(mockTask);

		await expect(removeTask(mockTaskId, prismaMock)).resolves.toEqual({
			id: '01234567890123456789',
			title: 'New Task',
			description: 'Creating a new task',
			authorId: '98765432109876543210',
			status: 'NOT_STARTED',
			startsAt: new Date('2022-04-14T19:26:30.435Z'),
			endsAt: new Date('2022-04-14T19:26:30.435Z'),
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
		});
	});

	it('should update a task (updateTask)', async () => {
		prismaMock.task.update.mockResolvedValue(mockTask);

		await expect(
			updateTask(mockTaskId, mockUpdateTaskDto, prismaMock),
		).resolves.toEqual({
			id: '01234567890123456789',
			title: 'New Task',
			description: 'Creating a new task',
			authorId: '98765432109876543210',
			status: 'NOT_STARTED',
			startsAt: new Date('2022-04-14T19:26:30.435Z'),
			endsAt: new Date('2022-04-14T19:26:30.435Z'),
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
		});
	});
});
