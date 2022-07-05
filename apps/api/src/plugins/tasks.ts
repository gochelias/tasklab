import { Plugin, Server } from '@hapi/hapi';
import { tasksRoutes } from '../tasks/tasks.route';

export const tasksPlugin: Plugin<null> = {
	name: 'app/tasks',
	dependencies: ['prisma'],
	register: (server: Server): void => {
		tasksRoutes(server);
	},
};
