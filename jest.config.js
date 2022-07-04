/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
	roots: ['apps/server'],
	transform: {
		'^.+\\.(t|j)s$': 'ts-jest',
	},
};

module.exports = config;
