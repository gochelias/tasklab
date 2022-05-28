import { CalendarIcon, Tag, TagIcon } from '@tasklab/ui';
import moment from 'moment';

const startsAtDate = moment('2022-05-16T16:04:02.715Z').format('MMM Do YY');
const startsAt = moment('2022-05-16T16:04:02.715Z').fromNow();
const endsAt = moment('2022-06-16T16:04:02.715Z').fromNow();
const endsAtDate = moment('2022-06-16T16:04:02.715Z').format('MMM Do YY');

export const TaskInfo = () => (
	<>
		<h1 className="text-3xl font-semibold dark:text-[#f2f2f7] ">
			Title Example
		</h1>
		<div className="space-y-5 my-8 font-normal">
			<div className="flex items-center space-x-5 text-[#8E8E93] select-none">
				<CalendarIcon />
				<p>
					Started{' '}
					<span
						title={startsAtDate}
						className="text-black underline decoration-[#D1D1D6] decoration-dashed"
					>
						{startsAt}
					</span>{' '}
					and ends{' '}
					<span
						title={endsAtDate}
						className="text-black underline decoration-[#D1D1D6] decoration-dashed"
					>{`${endsAt}`}</span>
				</p>
			</div>
			<div className="flex items-center my-4 space-x-5">
				<TagIcon className="text-[#8E8E93]" />
				<div className="flex text-sm space-x-2 ">
					<button className="tag">
						<Tag label="Style Guide" emoji="🚀" />
					</button>
					<button className="tag">
						<Tag label="Design System" />
					</button>
				</div>
			</div>
		</div>
		<p>Description</p>
	</>
);
