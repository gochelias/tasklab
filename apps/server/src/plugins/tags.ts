import { Plugin, Server } from '@hapi/hapi';
import { tagsRoutes } from '../tags/tags.route';

export const tagsPlugin: Plugin<null> = {
	name: 'app/tags',
	dependencies: ['prisma'],
	register: (server: Server): void => {
		tagsRoutes(server);
	},
};
