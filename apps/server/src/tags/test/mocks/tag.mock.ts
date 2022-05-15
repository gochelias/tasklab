import { Tag } from '@prisma/client';

export const mockTagId = '01234567890123456789';

export const mockTag: Tag = {
	id: '01234567890123456789',
	name: 'Design',
	createdAt: new Date('2022-04-14T19:26:30.435Z'),
	updatedAt: new Date('2022-04-14T19:26:30.435Z'),
};

export const mockTags: Tag[] = [
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
];

export const mockCreateTagDto = {
	name: 'Design',
	tasks: ['01234567890123456789', '45987654321098765432106'],
};

export const mockUpdateTagDto = {
	name: 'Design',
	tasks: ['98765432109876543210', '40123456789012345678956'],
};
