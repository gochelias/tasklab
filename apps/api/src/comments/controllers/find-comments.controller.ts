import { internal } from '@hapi/boom';
import { Comment, PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export const findAllComments = async (
	prisma: PrismaClient,
): Promise<Comment[]> => {
	const comments = await prisma.comment
		.findMany()
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return comments;
};
