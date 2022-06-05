import Image from 'next/image';

export const Comment = (props: any) => {
	const { comment } = props;

	return (
		<>
			<div className="mb-6 flex space-x-4 rounded-2xl">
				<div className="relative h-10 w-10 overflow-hidden rounded-full">
					<Image
						alt="avatar"
						layout="fill"
						src={comment.author.avatar}
					/>
				</div>
				<div className="space-y-1">
					<p className="text-lg font-semibold">
						{`${comment.author.name}`}
						<span className="text-100-light text-base font-normal">
							{` ${comment.author.username}`}
						</span>
						<span className="text-100-light text-base font-normal">
							{` · ${comment.createdAt}`}
						</span>
					</p>
					<p className="bg-300-light flex w-full max-w-[626.017px] flex-row rounded-xl rounded-tl-none px-3 py-2 text-base">
						{`${comment.content}`}
					</p>
				</div>
			</div>
		</>
	);
};
