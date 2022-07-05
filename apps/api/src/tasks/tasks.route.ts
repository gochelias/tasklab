import { Request, ResponseObject, ResponseToolkit, Server } from '@hapi/hapi';
import { removeTask } from './controllers/remove-task.controller';
import { createTask } from './controllers/create-task.controller';
import { findOneTask } from './controllers/find-one-task.controller';
import { findAllTask } from './controllers/find-tasks.controller';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { updateTask } from './controllers/update-task.controller';

export const tasksRoutes = (server: Server) => {
	server.route({
		method: 'POST',
		path: '/tasks',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const {
				title,
				description,
				authorId,
				startsAt,
				endsAt,
				assignedTo,
				tags,
			} = request.payload as CreateTaskDto;

			const user = await createTask(
				{
					title,
					description,
					authorId,
					startsAt,
					endsAt,
					assignedTo,
					tags,
				},
				request.server.app.prisma,
			);
			return h.response(user).code(201);
		},
	});

	server.route({
		method: 'GET',
		path: '/tasks',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const tasks = await findAllTask(request.server.app.prisma);
			return h.response(tasks).code(200);
		},
	});

	server.route({
		method: 'GET',
		path: '/tasks/{id}',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const task = await findOneTask(
				request.params.id,
				request.server.app.prisma,
			);

			return h.response(task).code(200);
		},
	});

	server.route({
		method: 'DELETE',
		path: '/tasks/{id}',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const { id } = request.params;
			const { prisma } = request.server.app;

			await removeTask(id, prisma);

			return h.response().code(204);
		},
	});

	server.route({
		method: 'PATCH',
		path: '/tasks/{id}',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const { id } = request.params;
			const { prisma } = request.server.app;

			const {
				title,
				description,
				startsAt,
				endsAt,
				status,
				assignedTo,
				tags,
			} = request.payload as UpdateTaskDto;

			const task = await updateTask(
				id,
				{
					title,
					description,
					startsAt,
					endsAt,
					assignedTo,
					status,
					tags,
				},
				prisma,
			);

			return h.response(task).code(200);
		},
	});
};
