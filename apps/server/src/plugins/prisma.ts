import { Plugin, Server } from '@hapi/hapi';
import { PrismaClient } from '@prisma/client';

declare module '@hapi/hapi' {
	interface ServerApplicationState {
		prisma: PrismaClient;
	}
}

export const prismaPlugin: Plugin<null> = {
	name: 'prisma',
	register: (server: Server): void => {
		const prisma = new PrismaClient({
			log: [{ emit: 'event', level: 'info' }, 'warn', 'error'],
			errorFormat: 'pretty',
		});

		prisma.$on('info', e => {
			server.logger.info(e);
		});

		server.app.prisma = prisma;

		server.ext({
			type: 'onPostStop',
			method: async (s: Server): Promise<void> => {
				s.app.prisma.$disconnect();
			},
		});
	},
};
