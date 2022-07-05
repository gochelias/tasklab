import { prismaMock } from '../../singleton';
import { createUser } from '../controllers/create-user.controller';
import { findOneUser } from '../controllers/find-one-user.controller';
import { findAllUsers } from '../controllers/find-users.controller';
import { removeUser } from '../controllers/remove-user.controller';
import {
	mockCreateUserDto,
	mockUser,
	mockUserId,
	mockUsers,
} from './mocks/user.mock';

describe('User Controllers', () => {
	it('should create new user (createUser)', async () => {
		prismaMock.user.create.mockResolvedValue(mockUser);

		await expect(
			createUser(mockCreateUserDto, prismaMock),
		).resolves.toEqual({
			id: '01234567890123456789',
			avatar: 'http://api.tasklab.com/v1/img/01234567890123456789',
			name: 'Jack Ryan',
			username: 'jackryan',
			email: 'jack@email.com',
			password: '012345',
			roles: ['USER'],
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
		});
	});

	it('should return all users (findAllUsers)', async () => {
		prismaMock.user.findMany.mockResolvedValue(mockUsers);

		await expect(findAllUsers(prismaMock)).resolves.toEqual([
			{
				id: '01234567890123456789',
				avatar: 'http://api.tasklab.com/v1/img/01234567890123456789',
				name: 'Jack Ryan',
				username: 'jackryan',
				email: 'jack@email.com',
				password: '012345',
				roles: ['USER'],
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
				roles: ['USER'],
				createdAt: new Date('2022-04-14T19:26:30.435Z'),
				updatedAt: new Date('2022-04-14T19:26:30.435Z'),
			},
		]);
	});

	it('should find user by id (findOneUser)', async () => {
		prismaMock.user.findUnique.mockResolvedValue(mockUser);

		await expect(findOneUser(mockUserId, prismaMock)).resolves.toEqual({
			id: '01234567890123456789',
			avatar: 'http://api.tasklab.com/v1/img/01234567890123456789',
			name: 'Jack Ryan',
			username: 'jackryan',
			email: 'jack@email.com',
			password: '012345',
			roles: ['USER'],
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
		});
	});

	it('should delete a user (removeUser)', async () => {
		prismaMock.user.delete.mockResolvedValue(mockUser);

		await expect(removeUser(mockUserId, prismaMock)).resolves.toEqual({
			id: '01234567890123456789',
			avatar: 'http://api.tasklab.com/v1/img/01234567890123456789',
			name: 'Jack Ryan',
			username: 'jackryan',
			email: 'jack@email.com',
			password: '012345',
			roles: ['USER'],
			createdAt: new Date('2022-04-14T19:26:30.435Z'),
			updatedAt: new Date('2022-04-14T19:26:30.435Z'),
		});
	});
});
