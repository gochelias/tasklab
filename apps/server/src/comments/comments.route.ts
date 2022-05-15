import { Request, ResponseObject, ResponseToolkit, Server } from '@hapi/hapi';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { updateComment } from './controllers/update-comment.controller';
import { findAllComments } from './controllers/find-comments.controller';
import { createComment } from './controllers/create-comment.controller';
import { CreateCommentDto } from './dto/create-comment.dto';
import { findOneComment } from './controllers/find-one-comment.controller';

export const commentsRoutes = (server: Server): void => {
	server.route({
		method: 'POST',
		path: '/comments',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const { content, userId, taskId } =
				request.payload as CreateCommentDto;

			const comment = await createComment(
				{ content, userId, taskId },
				request.server.app.prisma,
			);

			return h.response(comment).code(201);
		},
	});

	server.route({
		method: 'GET',
		path: '/comments',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const comments = await findAllComments(request.server.app.prisma);
			return h.response(comments).code(200);
		},
	});

	server.route({
		method: 'GET',
		path: '/comments/{id}',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const { id } = request.params;
			const { prisma } = request.server.app;

			const comment = await findOneComment(id, prisma);

			return h.response(comment).code(200);
		},
	});

	server.route({
		method: 'PUT',
		path: '/comments/{id}',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const { id } = request.params;
			const { content } = request.payload as UpdateCommentDto;
			const { prisma } = request.server.app;

			const comment = await updateComment(id, { content }, prisma);

			return h.response(comment).code(200);
		},
	});
};
