import { Server } from '@hapi/hapi';

export const appRoute = (server: Server): void => {
	server.route({
		method: 'GET',
		path: '/',
		handler: () => 'Home',
	});

	server.route({
		method: 'GET',
		path: '/docs',
		handler: () => 'Docs',
	});
};
