export class CreateTaskDto {
	title: string;

	description: string;

	authorId: string;

	startsAt: Date;

	endsAt: Date;

	assignedTo: string[];

	tags: string[];
}
