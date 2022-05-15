import { internal } from '@hapi/boom';
import { Comment, PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export const removeComment = async (
	commendId: string,
	prisma: PrismaClient,
): Promise<Comment> => {
	const comment = await prisma.comment
		.delete({
			where: { id: commendId },
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return comment;
};
