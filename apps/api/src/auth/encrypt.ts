import { compare, genSalt, hash } from 'bcrypt';
import { internal } from '@hapi/boom';

export const toHash = async (password: string): Promise<string> => {
	if (password.length === 0) throw internal();

	const salt = await genSalt(10);
	const isHashed = await hash(password, salt).catch((error: Error) => {
		console.log(error);
		throw internal();
	});

	return isHashed;
};

export const toMatch = async (
	password: string,
	userHash: string,
): Promise<boolean | void> => {
	const isMatched = compare(password, userHash).catch((error: Error) => {
		console.log(error);
	});

	return isMatched;
};
