import Pino from 'hapi-pino';
import { Plugin, Server } from '@hapi/hapi';

export const loggerPlugin: Plugin<null> = {
	name: 'logger',
	register: async (server: Server): Promise<void> => {
		await server.register({
			plugin: Pino,
			options: {
				redact: ['req.headers.authorization'],
				transport: {
					target: 'pino-pretty',
					options: {
						colorize: true,
						minimumLevel: 'info',
						levelFirst: true,
						translateTime: true,
					},
				},
			},
		});
	},
};
