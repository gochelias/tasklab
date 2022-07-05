import { Request, Server, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import { internal } from '@hapi/boom';
import { findAllUsers } from './controllers/find-users.controller';
import { createUser } from './controllers/create-user.controller';
import { findOneUser } from './controllers/find-one-user.controller';
import { removeUser } from './controllers/remove-user.controller';
import { CreateUserDto } from './dto/create-user.dto';

export const userRoutes = (server: Server) => {
	server.route({
		method: 'POST',
		path: '/users',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const { name, username, email, password } =
				request.payload as CreateUserDto;

			const user = await createUser(
				{ name, username, email, password },
				request.server.app.prisma,
			);
			return h.response(user);
		},
	});

	server.route({
		method: 'GET',
		path: '/users',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const users = await findAllUsers(request.server.app.prisma);
			return h.response(users);
		},
	});

	server.route({
		method: 'GET',
		path: '/users/{id}',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			const user = await findOneUser(
				request.params.id,
				request.server.app.prisma,
			);
			if (!user) throw internal();

			return h.response(user);
		},
	});

	server.route({
		method: 'DELETE',
		path: '/users/{id}',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> => {
			await removeUser(request.params.id, request.server.app.prisma);
			return h.response().code(204);
		},
	});
};
