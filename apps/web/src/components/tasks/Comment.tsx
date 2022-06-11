import Image from 'next/image';

export const Comment = (props: any) => {
	const { comment } = props;

	return (
		<>
			<div className="mb-3 mr-4 flex space-x-4 rounded-3xl px-4 py-4">
				<div className="relative h-12 w-12 overflow-hidden rounded-full">
					<Image
						alt="avatar"
						layout="fill"
						src={comment.author.avatar}
					/>
				</div>
				<div className="space-y-1">
					<div className="flex items-center space-x-2">
						<p className="text-lg font-semibold leading-none">
							{`${comment.author.name}`}
						</p>
						<p className="bg-blue-light/20 text-blue-light w-max rounded-md p-1 text-xs font-medium leading-none">
							{`Role`}
						</p>
						<p className="text-200-light text-base font-normal">
							{`${comment.createdAt}`}
						</p>
					</div>
					<p className="flex w-full max-w-[626.017px] flex-row">
						{`${comment.content}`}
					</p>
				</div>
			</div>
		</>
	);
};
