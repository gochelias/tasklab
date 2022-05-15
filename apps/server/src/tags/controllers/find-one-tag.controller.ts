import { internal, notFound } from '@hapi/boom';
import { PrismaClient, Tag } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export const findOneTag = async (
	id: string,
	prisma: PrismaClient,
): Promise<Tag> => {
	const tag = await prisma.tag
		.findUnique({
			where: { id },
			include: { tasks: true },
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	if (!tag) throw notFound();

	return tag;
};
