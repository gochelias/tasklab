import { prismaMock } from '../../singleton';
import { findAllTags } from '../controllers/find-tags.controller';
import { createTag } from '../controllers/create-tag.controller';
import { findOneTag } from '../controllers/find-one-tag.controller';
import { removeTag } from '../controllers/remove-tag.controller';
import { updateTag } from '../controllers/update-tag.controller';
import {
	mockCreateTagDto,
	mockTag,
	mockTagId,
	mockTags,
	mockUpdateTagDto,
} from './mocks/tag.mock';

describe('Tag Controllers', () => {
	it('should create new Tag (createTag)', async () => {
		prismaMock.tag.create.mockResolvedValue(mockTag);

		await expect(createTag(mockCreateTagDto, prismaMock)).resolves.toEqual({
			id: '01234567890123456789',
			name: 'Design',
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
		});
	});

	it('should return all tags (findAllTasks)', async () => {
		prismaMock.tag.findMany.mockResolvedValue(mockTags);

		await expect(findAllTags(prismaMock)).resolves.toEqual([
			{
				id: '01234567890123456789',
				name: 'Design',
				createdAt: new Date('2022-04-14T19:26:30.435Z'),
				updatedAt: new Date('2022-04-14T19:26:30.435Z'),
			},
			{
				id: '98765432109876543210',
				name: 'Style',
				createdAt: new Date('2022-04-14T19:26:30.435Z'),
				updatedAt: new Date('2022-04-14T19:26:30.435Z'),
			},
		]);
	});

	it('should find a tag by id (findOneTag)', async () => {
		prismaMock.tag.findUnique.mockResolvedValue(mockTag);

		await expect(findOneTag(mockTagId, prismaMock)).resolves.toEqual({
			id: '01234567890123456789',
			name: 'Design',
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
		});
	});

	it('should delete a tag (removeTag)', async () => {
		prismaMock.tag.delete.mockResolvedValue(mockTag);

		await expect(removeTag(mockTagId, prismaMock)).resolves.toEqual({
			id: '01234567890123456789',
			name: 'Design',
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
		});
	});

	it('should update a tag (updateTag)', async () => {
		prismaMock.tag.update.mockResolvedValue(mockTag);

		await expect(
			updateTag(mockTagId, mockUpdateTagDto, prismaMock),
		).resolves.toEqual({
			id: '01234567890123456789',
			name: 'Design',
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
		});
	});
});
