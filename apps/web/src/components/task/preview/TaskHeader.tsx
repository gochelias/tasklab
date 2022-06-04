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
		assignedTo: [img, img, img, img, img],
	};

	return (
		<>
			<h1 className="text-3xl font-semibold">Title Example</h1>
			<div className="my-8 space-y-5">
				<div className="text-100-light dark:text-100-dark flex select-none items-center space-x-5">
					<CalendarIcon />
					<p>
						Started{' '}
						<span
							title={startsAtDate}
							className="decoration-200-light dark:decoration-200-dark text-black underline dark:text-white"
						>
							{startsAt}
						</span>{' '}
						and ends{' '}
						<span
							title={endsAtDate}
							className="decoration-200-light dark:decoration-200-dark text-black underline dark:text-white"
						>{`${endsAt}`}</span>
					</p>
				</div>
				<div className="text-100-light dark:text-100-dark flex select-none items-center space-x-5">
					<ProfileUserIcon />
					<div className="flex items-center -space-x-2 ">
						<AvatarsStacked task={task} max="20" isPreview={true} />
					</div>
				</div>
				<div className="my-4 flex items-center space-x-5">
					<TagIcon className="text-100-light dark:text-100-dark" />
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
