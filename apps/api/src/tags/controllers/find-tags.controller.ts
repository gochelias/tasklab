import { internal } from '@hapi/boom';
import { PrismaClient, Tag } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export const findAllTags = async (prisma: PrismaClient): Promise<Tag[]> => {
	const tags = await prisma.tag
		.findMany()
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return tags;
};
