import { internal } from '@hapi/boom';
import { PrismaClient, Tag } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export const removeTag = async (
	id: string,
	prisma: PrismaClient,
): Promise<Tag> => {
	const tag = await prisma.tag
		.delete({
			where: { id },
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return tag;
};
