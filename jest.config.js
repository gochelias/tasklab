/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
	roots: ['apps/server'],
	// collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,tsx}'],
	// moduleFileExtensions: ['js', 'json', 'ts'],
	// testRegex: '.*\\.spec\\.ts$',
	transform: {
		'^.+\\.(t|j)s$': 'ts-jest',
	},
};

module.exports = config;
