/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
	roots: ['apps/api'],
	transform: {
		'^.+\\.(t|j)s$': 'ts-jest',
	},
};

module.exports = config;
