import { PrismaClient, Task } from '@prisma/client';
import { UpdateTaskDto } from '../dto/update-task.dto';

export const updateTask = async (
	taskId: string,
	updateTaskDto: UpdateTaskDto,
	prisma: PrismaClient,
): Promise<Task> => {
	const task = prisma.task.update({
		where: { id: taskId },
		data: {
			title: updateTaskDto.title,
			description: updateTaskDto.description,
			startsAt: updateTaskDto.startsAt,
			endsAt: updateTaskDto.endsAt,
			status: updateTaskDto.status,
			assignedTo: {
				set: updateTaskDto.assignedTo?.map((userId: string) => ({
					id: userId,
				})),
			},
			tags: {
				set: updateTaskDto.tags?.map((tagId: string) => ({
					id: tagId,
				})),
			},
		},
	});

	return task;
};
