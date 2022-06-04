import {
	IconButton,
	MoreIcon,
	TaskTabs,
	TaskStatus,
	CalendarIcon,
	ProfileUserIcon,
	Tag,
	TagIcon,
} from '@tasklab/ui';
import { Tab } from '@headlessui/react';
import moment from 'moment';
import { AvatarsStacked } from './AvatarStacked';

import { TaskInfo } from './TaskInfo';
import { TaskComments } from './TaskComments';

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

export const TaskPreview = () => (
	<>
		<Tab.Group>
			<div className="absolute w-full">
				<div className="mb-10 flex items-center justify-between pr-8">
					<TaskStatus taskStatus="COMPLETED" />
					<div className="flex space-x-4">
						<Tab.List className="flex space-x-4">
							<TaskTabs />
						</Tab.List>
						<div className="flex flex-col items-center space-y-[2px]">
							<IconButton icon={<MoreIcon />} />
						</div>
					</div>
				</div>
				<div className="absolute">
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
								<AvatarsStacked
									task={task}
									max="20"
									isPreview={true}
								/>
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
				</div>
			</div>
			<div className="flex h-full w-full flex-col">
				<Tab.Panels className="h-full pt-24">
					<Tab.Panel className="flex h-full">
						<TaskInfo />
					</Tab.Panel>
					<Tab.Panel className="flex h-full flex-col">
						<TaskComments />
					</Tab.Panel>
				</Tab.Panels>
			</div>
		</Tab.Group>
	</>
);
