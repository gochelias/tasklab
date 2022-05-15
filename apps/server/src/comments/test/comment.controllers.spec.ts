import { prismaMock } from '../../singleton';
import {
	mockComment,
	mockCommentId,
	mockCommets,
	mockCreatedCommentDto,
	mockUpdateCommentDto,
} from './comment.mock';
import { createComment } from '../controllers/create-comment.controller';
import { findAllComments } from '../controllers/find-comments.controller';
import { findOneComment } from '../controllers/find-one-comment.controller';
import { removeComment } from '../controllers/remove-comment.controller';
import { updateComment } from '../controllers/update-comment.controller';

describe('Comment Controllers', () => {
	it('should create new comment (createComment)', async () => {
		prismaMock.comment.create.mockResolvedValue(mockComment);

		await expect(
			createComment(mockCreatedCommentDto, prismaMock),
		).resolves.toEqual({
			id: '01234567890123456789',
			content: 'new comment',
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
			userId: '01234567890123456789',
			taskId: '01234567890123456789',
		});
	});

	it('should return all comments (findAllComments)', async () => {
		prismaMock.comment.findMany.mockResolvedValue(mockCommets);

		await expect(findAllComments(prismaMock)).resolves.toEqual([
			{
				id: '01234567890123456789',
				content: 'new comment',
				createdAt: new Date('2022-04-14T19:26:30.435Z'),
				updatedAt: new Date('2022-04-14T19:26:30.435Z'),
				userId: '01234567890123456789',
				taskId: '123',
			},
			{
				id: '01234567890123456789',
				content: 'new comment',
				createdAt: new Date('2022-04-14T19:26:30.435Z'),
				updatedAt: new Date('2022-04-14T19:26:30.435Z'),
				userId: '01234567890123456789',
				taskId: '01234567890123456789',
			},
		]);
	});

	it('should find a comment by id (findOneComment)', async () => {
		prismaMock.comment.findUnique.mockResolvedValue(mockComment);

		await expect(
			findOneComment(mockCommentId, prismaMock),
		).resolves.toEqual({
			id: '01234567890123456789',
			content: 'new comment',
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
			userId: '01234567890123456789',
			taskId: '01234567890123456789',
		});
	});

	it('should delete a comment (removeComment)', async () => {
		prismaMock.comment.delete.mockResolvedValue(mockComment);

		await expect(removeComment(mockCommentId, prismaMock)).resolves.toEqual(
			{
				id: '01234567890123456789',
				content: 'new comment',
				createdAt: new Date('2022-04-14T19:26:30.435Z'),
				updatedAt: new Date('2022-04-14T19:26:30.435Z'),
				userId: '01234567890123456789',
				taskId: '01234567890123456789',
			},
		);
	});

	it('should update a comment (updateComment)', async () => {
		prismaMock.comment.update.mockResolvedValue(mockComment);

		await expect(
			updateComment(mockCommentId, mockUpdateCommentDto, prismaMock),
		).resolves.toEqual({
			id: '01234567890123456789',
			content: 'new comment',
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
			userId: '01234567890123456789',
			taskId: '01234567890123456789',
		});
	});
});
