import Hapi, { Server } from '@hapi/hapi';

import { prismaPlugin } from './plugins/prisma';
import { loggerPlugin } from './plugins/logger';
import { appRoute } from './app.route';
import { userPlugin } from './plugins/users';
import { tasksPlugin } from './plugins/tasks';
import { commentsPlugin } from './plugins/comments';
import { tagsPlugin } from './plugins/tags';

export const server = Hapi.server({
	port: process.env.PORT,
	host: process.env.HOST,
	debug: false,
});

const plugins = async (): Promise<void> => {
	await server.register([
		prismaPlugin,
		loggerPlugin,
		userPlugin,
		tasksPlugin,
		commentsPlugin,
		tagsPlugin,
	]);
};

export const init = async (): Promise<Server> => {
	await plugins();

	appRoute(server);
	await server.initialize();

	return server;
};

export const start = async (): Promise<Server> => {
	await plugins();

	server.logger.info(`Mode: ${process.env.NODE_ENV}`);

	await server.app.prisma.$connect();
	await server.start();

	return server;
};

process
	.on('unhandledRejection', async (error: Error) => {
		server.logger.fatal(error);

		await server.app.prisma.$disconnect();
		process.exit(1);
	})
	.on('uncaughtException', (error: Error) => {
		server.logger.fatal(error);
	});
