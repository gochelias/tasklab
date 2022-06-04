import Image from 'next/image';
import { Fragment } from 'react';

export const TaskComments = () => {
	const comments: any[] = [
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, veniam placeat! Facilis inventore tempora possimus esse, vero reprehenderit similique unde?',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, veniam placeat! Facilis inventore tempora possimus esse, vero reprehenderit similique unde?',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, veniam placeat! Facilis inventore tempora possimus esse, vero reprehenderit similique unde?',
			createdAt: '12 oct. 2021',
		},
	];
	return (
		<>
			<div className="h-full pb-20 pt-60">
				<div className="h-full overflow-y-auto">
					{comments.length > 0 ? (
						comments.map((comment: any) => (
							<Fragment>
								<div className="mb-8 flex space-x-4 rounded-2xl">
									<div className="relative h-10 w-10 overflow-hidden rounded-full">
										<Image
											alt="avatar"
											layout="fill"
											src={comment.author.avatar}
										/>
									</div>
									<div className="space-y-2">
										<div className="">
											<p className="space-x-2 font-semibold leading-none">
												{`${comment.author.name}`}
												<span className="text-100-light leading- text-base font-normal">
													{` · ${comment.createdAt}`}
												</span>
											</p>
											<p className="text-100-light text-base leading-none">
												{`${comment.author.username}`}
											</p>
										</div>
										<p className="flex w-full max-w-[626.017px] flex-row rounded-xl rounded-tl-none bg-slate-200 px-3 py-2 text-base">{`${comment.content}`}</p>
									</div>
								</div>
							</Fragment>
						))
					) : (
						<div>No Comments</div>
					)}
				</div>
				<div className="flex h-20 items-end pb-1">
					<input
						className="bg-300-light focus:ring-offset-blue-light focus:ring-blue-light/50 placeholder:text-100-light w-full self-end rounded-2xl px-4 py-3 transition-transform duration-300 ease-out focus:ring-2 focus:ring-offset-2"
						type="text"
						name=""
						id=""
						placeholder="Write a comment"
					/>
				</div>
			</div>
		</>
	);
};
