import { internal } from '@hapi/boom';
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { User } from '../interfaces/user.interface';

export const removeUser = async (
	id: string,
	prisma: PrismaClient,
): Promise<any> => {
	const user = await prisma.user
		.delete({ where: { id } })
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return user;
};
