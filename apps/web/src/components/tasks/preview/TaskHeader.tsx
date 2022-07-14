import { CalendarIcon, ProfileUserIcon, Tag, TagIcon } from '@tasklab/ui';
import moment from 'moment';
import { AvatarsStacked } from '../AvatarStacked';

export const TaskHeader = () => {
	const startsAtDate = moment('2022-05-16T16:04:02.715Z').format('MMM Do YY');
	const startsAt = moment('2022-05-16T16:04:02.715Z').fromNow();
	const endsAt = moment('2022-06-16T16:04:02.715Z').fromNow();
	const endsAtDate = moment('2022-06-16T16:04:02.715Z').format('MMM Do YY');

	const img =
		'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80';
	const task = {
		id: '1',
		title: 'Title example',
		assignedTo: [
			{ id: '1', avatar: img },
			{ id: '2', avatar: img },
		],
	};

	return (
		<>
			<p className="text-3xl font-semibold text-slate-700 dark:text-slate-200">
				Title Example
			</p>
			<div className="my-8 space-y-4">
				<div className="flex select-none items-center space-x-5 text-slate-400 dark:text-slate-500">
					<CalendarIcon />
					<p className="text-slate-500 dark:text-slate-400">
						Started{' '}
						<span
							title={startsAtDate}
							className="font-medium text-slate-700 underline decoration-slate-300 dark:text-slate-200 dark:decoration-slate-600"
						>
							{startsAt}
						</span>{' '}
						and ends{' '}
						<span
							title={endsAtDate}
							className="font-medium text-slate-700 underline decoration-slate-300 dark:text-slate-200 dark:decoration-slate-600"
						>{`${endsAt}`}</span>
					</p>
				</div>
				<div className="flex select-none items-center space-x-5 text-slate-400 dark:text-slate-500">
					<ProfileUserIcon />
					<div className="flex items-center -space-x-2.5 ">
						<AvatarsStacked
							assigned={task.assignedTo}
							max={3}
							isPreview={true}
						/>
					</div>
				</div>
				<div className="my-4 flex items-center space-x-5">
					<TagIcon className="text-slate-400 dark:text-slate-500" />
					<div className="flex space-x-2 text-sm ">
						<button className="tag">
							<Tag label="Style Guide" emoji="🚀" />
						</button>
						<button className="tag">
							<Tag label="Design System" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
