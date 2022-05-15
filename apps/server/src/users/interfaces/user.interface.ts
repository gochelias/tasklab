import { Comment, Role, Task } from '@prisma/client';

export interface User {
	id: string;
	avatar: string;
	name: string;
	username: string;
	email: string;
	password: string;
	roles: Role[];
	createdAt: Date;
	updatedAt: Date;
	createdTasks?: Task[];
	assignedTasks?: Task[];
	comments?: Comment[];
}
