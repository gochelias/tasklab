import { PrismaClient, Task } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { internal } from '@hapi/boom';

/**
 * **Fuction get all tasks**
 * @param prisma PrismaClient
 * @returns Promise
 *
 */

export const findAllTask = async (prisma: PrismaClient): Promise<Task[]> => {
	const task = await prisma.task
		.findMany()
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return task;
};
