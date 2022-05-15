const withTM = require('next-transpile-modules')(['@tasklab/ui']);

module.exports = withTM({
	reactStrictMode: true,
});
