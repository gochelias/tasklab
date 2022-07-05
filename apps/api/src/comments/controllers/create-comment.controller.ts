import { internal } from '@hapi/boom';
import { Comment, PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { CreateCommentDto } from '../dto/create-comment.dto';

export const createComment = async (
	createComentDto: CreateCommentDto,
	prisma: PrismaClient,
): Promise<Comment> => {
	const comment = await prisma.comment
		.create({
			data: {
				content: createComentDto.content,
				userId: createComentDto.userId,
				taskId: createComentDto.taskId,
			},
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return comment;
};
