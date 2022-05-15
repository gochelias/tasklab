import { PrismaClient, Tag } from '@prisma/client';
import { UpdateTagDto } from '../dto/update-tag.dto';

export const updateTag = async (
	tagId: string,
	updateTagDto: UpdateTagDto,
	prisma: PrismaClient,
): Promise<Tag> => {
	const tag = await prisma.tag.update({
		where: { id: tagId },
		data: {
			name: updateTagDto.name,
			tasks: {
				set: updateTagDto.tasks?.map((taskId: string) => ({
					id: taskId,
				})),
			},
		},
	});

	return tag;
};
