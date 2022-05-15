import { User } from '@prisma/client';
import { CreateUserDto } from '../../dto/create-user.dto';
import { Role } from '../../../auth/enums/role.enum';

export const mockUserId = '01234567890123456789';

export const mockUser: User = {
	id: '01234567890123456789',
	avatar: 'http://api.tasklab.com/v1/img/01234567890123456789',
	name: 'Jack Ryan',
	username: 'jackryan',
	email: 'jack@email.com',
	password: '012345',
	roles: [Role.User],
	createdAt: new Date('2022-04-14T19:26:30.435Z'),
	updatedAt: new Date('2022-04-14T19:26:30.435Z'),
};

export const mockUsers: User[] = [
	{
		id: '01234567890123456789',
		avatar: 'http://api.tasklab.com/v1/img/01234567890123456789',
		name: 'Jack Ryan',
		username: 'jackryan',
		email: 'jack@email.com',
		password: '012345',
		roles: [Role.User],
		createdAt: new Date('2022-04-14T19:26:30.435Z'),
		updatedAt: new Date('2022-04-14T19:26:30.435Z'),
	},
	{
		id: '98765432109876543210',
		avatar: 'http://api.tasklab.com/v1/img/98765432109876543210',
		name: 'Jhon Smith',
		username: 'jacksmith',
		email: 'jhon@email.com',
		password: '012345',
		roles: [Role.User],
		createdAt: new Date('2022-04-14T19:26:30.435Z'),
		updatedAt: new Date('2022-04-14T19:26:30.435Z'),
	},
];

export const mockCreateUserDto: CreateUserDto = {
	avatar: 'http://api.tasklab.com/v1/img/01234567890123456789',
	name: 'Jack Ryan',
	username: 'jackryan',
	email: 'jack@email.com',
	password: '012345',
};

export const mockOneUser: User = {
	id: '01234567890123456789',
	avatar: 'http://api.tasklab.com/v1/img/01234567890123456789',
	name: 'Jack Ryan',
	username: 'jackryan',
	email: 'jack@email.com',
	password: '012345',
	roles: [Role.User],
	createdAt: new Date('2022-04-14T19:26:30.435Z'),
	updatedAt: new Date('2022-04-14T19:26:30.435Z'),
};
