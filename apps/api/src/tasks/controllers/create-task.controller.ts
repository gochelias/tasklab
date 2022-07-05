import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaClient, Task } from '@prisma/client';
import { internal } from '@hapi/boom';
import { CreateTaskDto } from '../dto/create-task.dto';

export const createTask = async (
	createTaskDto: CreateTaskDto,
	prisma: PrismaClient,
): Promise<Task> => {
	const task = await prisma.task
		.create({
			data: {
				title: createTaskDto.title,
				description: createTaskDto.description,
				authorId: createTaskDto.authorId,
				startsAt: createTaskDto.startsAt,
				endsAt: createTaskDto.endsAt,

				assignedTo: {
					connect: createTaskDto.assignedTo.map((userId: string) => ({
						id: userId,
					})),
				},
				tags: {
					connect: createTaskDto.tags.map((tagId: string) => ({
						id: tagId,
					})),
				},
			},
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return task;
};
