import { Request, ResponseToolkit, Server, ResponseObject } from '@hapi/hapi';
// import { CreateUserDto } from '../users/dto/create-user.dto';

export const authRoutes = (server: Server): void => {
	server.route({
		method: 'POST',
		path: '/auth/login',
		handler: async (
			request: Request,
			h: ResponseToolkit,
		): Promise<ResponseObject> =>
			/* const { avatar, name, username, email, password } =
				request.payload as CreateUserDto; */

			h.response('hola').code(201),
	});
};
