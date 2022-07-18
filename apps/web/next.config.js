/* eslint-disable import/no-extraneous-dependencies */
const withTM = require('next-transpile-modules')(['@tasklab/ui']);

module.exports = withTM({
	images: {
		domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
	},
	reactStrictMode: true,
});
