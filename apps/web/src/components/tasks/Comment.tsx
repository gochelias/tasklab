import moment from 'moment';
import Image from 'next/image';

const createdAt = moment('2022-01-16T16:04:02.715Z').format('llll');

export const Comment = (props: any) => {
	const { comment } = props;

	return (
		<>
			<div className="mr-4 flex w-full space-x-4">
				<div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
					<Image
						alt="avatar"
						layout="fill"
						src={comment.author.avatar}
					/>
				</div>
				<div className="">
					<p className="flex items-center space-x-2">
						<span className="text-lg font-semibold leading-none text-slate-700 dark:text-slate-300">
							{`${comment.author.name}`}
						</span>
						<span className="text-base leading-none text-slate-500 dark:text-slate-400">
							{comment.author.username}
						</span>
						<span className="w-max rounded-md bg-indigo-500 py-1 px-1.5 pb-1.5 text-xs font-medium leading-none text-white">
							{`Role`}
						</span>
					</p>
					<p className="mt-1 mb-2 flex w-full max-w-[626.017px] flex-row text-slate-600 dark:text-slate-300">
						{`${comment.content}`}
					</p>
					<p className="text-sm font-medium leading-none text-slate-400 dark:text-slate-500">
						{`${createdAt}`}
					</p>
				</div>
			</div>
		</>
	);
};
