import { Plugin, Server } from '@hapi/hapi';
import { authRoutes } from '../auth/auth.route';

export const authPlugin: Plugin<null> = {
	name: 'app/auth',
	dependencies: ['prisma'],
	register: (server: Server): void => {
		authRoutes(server);
	},
};
