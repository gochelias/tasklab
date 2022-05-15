import { toHash } from '../encrypt';

describe('toHash', () => {
	const password = '012345';

	it('should be defined', () => {
		expect(toHash).toBeDefined();
	});

	it('should have diferent lenght ', async () => {
		await expect(toHash(password)).resolves.not.toHaveLength(
			password.length,
		);
	});

	it('should not be equal', async () => {
		await expect(toHash(password)).resolves.not.toEqual(password);
	});
});
