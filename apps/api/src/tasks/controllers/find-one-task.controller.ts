import { internal, notFound } from '@hapi/boom';
import { PrismaClient, Task } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

/**
 *
 * @param id string
 * @param prisma PrismaClient
 * @returns Promise Task
 */

export const findOneTask = async (
	id: string,
	prisma: PrismaClient,
): Promise<Task> => {
	const task = await prisma.task
		.findUnique({
			where: { id },
			select: {
				id: true,
				title: true,
				description: true,
				status: true,
				startsAt: true,
				endsAt: true,
				authorId: true,
				createdAt: true,
				updatedAt: true,
				author: {
					select: {
						id: true,
						name: true,
						username: true,
						avatar: true,
					},
				},
				assignedTo: {
					select: {
						id: true,
						name: true,
						username: true,
						avatar: true,
					},
				},
				tags: {
					select: {
						id: true,
						name: true,
					},
				},
				comments: {
					select: {
						id: true,
						content: true,
						user: {
							select: {
								id: true,
								avatar: true,
								name: true,
								username: true,
							},
						},
						updatedAt: true,
					},
				},
			},
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	if (!task) throw notFound();

	return task;
};
