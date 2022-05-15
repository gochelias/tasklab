import { PrismaClient, User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { internal } from '@hapi/boom';

export const findAllUsers = async (prisma: PrismaClient): Promise<User[]> => {
	const users = await prisma.user
		.findMany()
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return users;
};
