/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */

import { DeepMockProxy, mockDeep, mockReset } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import prisma from './client';

jest.mock('./client', () => ({
	__esModule: true,
	default: mockDeep<PrismaClient>(),
}));

beforeEach(async () => {
	mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
