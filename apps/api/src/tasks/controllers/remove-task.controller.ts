import { internal } from '@hapi/boom';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaClient, Task } from '@prisma/client';

export const removeTask = async (
	id: string,
	prisma: PrismaClient,
): Promise<Task> => {
	const task = prisma.task
		.delete({
			where: { id },
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return task;
};
