// import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
/* import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
import { notFound } from '@hapi/boom';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
 */
/* import { PrismaClient } from '@prisma/client';
import { toHash } from '../auth/encrypt';
import { User } from './user.interface'; */

/* export const createUser = async (
	request: Request,
	h: ResponseToolkit,
	prisma: PrismaClient,
): Promise<ResponseObject> => {
	// const { prisma } = request!.server.app;

	const { username, email, password } = request!.payload as User;
	const hashed = await toHash(password);

	const users = await prisma.user
		.create({
			data: { username, email, password: hashed },
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError.message);
			throw internal();
		});

	return h.response(users);
}; */

/* export const findAllUsers = async (
	request: Request,
	h: ResponseToolkit,
): Promise<ResponseObject> => {
	const { prisma } = request.server.app;

	const allUsers = await prisma.user.findMany();
	return h.response(allUsers);
}; */

/* export const findOneUser = async (
	request: Request,
	h: ResponseToolkit,
): Promise<ResponseObject> => {
	const { prisma } = request.server.app;

	const { id } = request.params;

	const user = await prisma.user
		.findUnique({
			where: { id },
			include: { posts: true },
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw notFound();
		});
	if (!user) throw notFound();

	return h.response(user);
}; */

/* export const removeUser = async (
	request: Request,
	h: ResponseToolkit,
): Promise<ResponseObject> => {
	const { prisma } = request.server.app;
	const { id } = request.params;

	const u = await prisma.user.delete({
		where: { id },
	});
	console.log(u);

	return h.response(u).code(204);
}; */
