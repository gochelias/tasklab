import { PrismaClient, User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { internal } from '@hapi/boom';

export const findOneUser = async (
	id: string,
	prisma: PrismaClient,
): Promise<User> => {
	const user = await prisma.user
		.findUnique({
			where: { id },
			include: {
				createdTasks: true,
				assignedTasks: true,
				comments: true,
			},
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});
	if (!user) throw new Error('Not found');

	return user;
};
