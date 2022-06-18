import moment from 'moment';
import Image from 'next/image';

const createdAt = moment('2022-01-16T16:04:02.715Z').format('L');

export const Comment = (props: any) => {
	const { comment } = props;

	return (
		<>
			<div className="mb-3 mr-4 flex space-x-4 rounded-3xl px-4 py-4">
				<div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
					<Image
						alt="avatar"
						layout="fill"
						src={comment.author.avatar}
					/>
				</div>
				<div className="">
					<div className="flex items-center space-x-2">
						<p className="text-lg font-semibold leading-none text-slate-700 dark:text-slate-300">
							{`${comment.author.name}`}
						</p>
						<p className="w-max rounded-md bg-indigo-500 p-1 text-xs font-medium leading-none text-white">
							{`Role`}
						</p>
						<p className="text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
							{`${createdAt}`}
						</p>
					</div>
					<p className="mt-2 flex w-full max-w-[626.017px] flex-row text-slate-600 dark:text-slate-300">
						{`${comment.content}`}
					</p>
				</div>
			</div>
		</>
	);
};
