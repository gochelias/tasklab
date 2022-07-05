import { Plugin, Server } from '@hapi/hapi';
import { userRoutes } from '../users/users.route';

export const userPlugin: Plugin<null> = {
	name: 'app/users',
	dependencies: ['prisma'],
	register: (server: Server): void => {
		userRoutes(server);
	},
};
