import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Comment, PrismaClient } from '@prisma/client';
import { internal } from '@hapi/boom';
import { UpdateCommentDto } from '../dto/update-comment.dto';

export const updateComment = async (
	commentId: string,
	updateCommentDto: UpdateCommentDto,
	prisma: PrismaClient,
): Promise<Comment> => {
	const comment = await prisma.comment
		.update({
			where: { id: commentId },
			data: {
				content: updateCommentDto.content,
			},
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return comment;
};
