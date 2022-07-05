import { notFound } from '@hapi/boom';
import { Comment, PrismaClient } from '@prisma/client';

export const findOneComment = async (
	id: string,
	prisma: PrismaClient,
): Promise<Comment> => {
	const comment = await prisma.comment.findUnique({
		where: { id },
	});

	if (!comment) throw notFound();

	return comment;
};
