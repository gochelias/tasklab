import { Comment } from '@prisma/client';
import { UpdateCommentDto } from '../dto/update-comment.dto';

export const mockCommentId = '01234567890123456789';

export const mockComment: Comment = {
	id: '01234567890123456789',
	content: 'new comment',
	createdAt: new Date('2022-04-14T19:26:30.435Z'),
	updatedAt: new Date('2022-04-14T19:26:30.435Z'),
	userId: '01234567890123456789',
	taskId: '01234567890123456789',
};

export const mockCommets: Comment[] = [
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
];

export const mockCreatedCommentDto = {
	content: 'new comment',
	userId: '01234567890123456789',
	taskId: '01234567890123456789',
};

export const mockUpdateCommentDto: UpdateCommentDto = {
	content: 'new comment',
};
