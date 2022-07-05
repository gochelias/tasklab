import { Plugin, Server } from '@hapi/hapi';
import { commentsRoutes } from '../comments/comments.route';

export const commentsPlugin: Plugin<null> = {
	name: 'app/comments',
	dependencies: ['prisma'],
	register: (server: Server): void => {
		commentsRoutes(server);
	},
};
