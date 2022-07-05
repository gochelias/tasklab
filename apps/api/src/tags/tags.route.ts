import { Request, ResponseObject, ResponseToolkit, Server } from '@hapi/hapi';
import { findAllTags } from './controllers/find-tags.controller';
import { removeTag } from './controllers/remove-tag.controller';
import { findOneTag } from './controllers/find-one-tag.controller';
import { CreateTagDto } from './dto/create-tag.dto';
import { createTag } from './controllers/create-tag.controller';
import { UpdateTagDto } from './dto/update-tag.dto';
import { updateTag } from './controllers/update-tag.controller';

export const tagsRoutes = (server: Server): void => {
	server.route({
		method: 'POST',
		path: '/tags',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const { name, tasks } = request.payload as CreateTagDto;

			const tag = await createTag(
				{ name, tasks },
				request.server.app.prisma,
			);

			return h.response(tag).code(201);
		},
	});

	server.route({
		method: 'GET',
		path: '/tags',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const tags = await findAllTags(request.server.app.prisma);

			return h.response(tags).code(200);
		},
	});

	server.route({
		method: 'GET',
		path: '/tags/{id}',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const { id } = request.params;

			const tag = await findOneTag(id, request.server.app.prisma);

			return h.response(tag).code(200);
		},
	});

	server.route({
		method: 'DELETE',
		path: '/tags/{id}',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const { id } = request.params;

			await removeTag(id, request.server.app.prisma);

			return h.response().code(204);
		},
	});

	server.route({
		method: 'PATCH',
		path: '/tags/{id}',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const { prisma } = request.server.app;
			const { id } = request.params;

			const { name, tasks } = request.payload as UpdateTagDto;

			const tag = await updateTag(id, { name, tasks }, prisma);

			return h.response(tag).code(200);
		},
	});
};
