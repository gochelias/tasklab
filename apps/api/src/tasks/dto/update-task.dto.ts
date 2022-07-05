import { TaskStatus } from '@prisma/client';

export class UpdateTaskDto {
	title?: string;

	description?: string;

	startsAt?: Date;

	endsAt?: Date;

	status?: TaskStatus;

	assignedTo?: string[];

	tags?: string[];
}
