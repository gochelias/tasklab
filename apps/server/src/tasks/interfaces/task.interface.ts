import { User } from '../../users/interfaces/user.interface';

export interface ITask {
	id: string;
	author?: User;
	authorId: string | null;
	title: string;
	description: string;
	status: string;
	assignedTo?: User[];
	tags?: string[];
	startsAt: Date;
	endsAt: Date;
	createdAt: Date;
	updatedAt: Date;
}
