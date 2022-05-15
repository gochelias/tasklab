import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { internal } from '@hapi/boom';
import { Role } from '../../auth/enums/role.enum';

import { toHash } from '../../auth/encrypt';
import { CreateUser } from '../interfaces/create-user.interface';
import { CreateUserDto } from '../dto/create-user.dto';

export const createUser = async (
	createUserDto: CreateUserDto,
	prisma: PrismaClient,
): Promise<CreateUser> => {
	const hashed = await toHash(createUserDto.password);

	const user = await prisma.user
		.create({
			data: {
				avatar: createUserDto.avatar,
				name: createUserDto.name,
				username: createUserDto.username,
				email: createUserDto.email,
				password: hashed,
				roles: [Role.User],
			},
		})
		.catch((prismaError: PrismaClientKnownRequestError) => {
			console.log(prismaError);
			throw internal();
		});

	return user;
};
