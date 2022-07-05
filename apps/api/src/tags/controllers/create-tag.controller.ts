import { internal } from '@hapi/boom';
import { PrismaClient, Tag } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { CreateTagDto } from '../dto/create-tag.dto';

export const createTag = async (
	createTagDto: CreateTagDto,
	prisma: PrismaClient,
): Promise<Tag> => {
	const tag = await prisma.tag
		.create({
			data: {
				name: createTagDto.name,
				tasks: {
					connect: createTagDto.tasks?.map((id: string) => ({
						id,
					})),
				},
			},
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return tag;
};
