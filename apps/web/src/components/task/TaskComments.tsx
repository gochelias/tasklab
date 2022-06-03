import Image from 'next/image';
import { Fragment } from 'react';

export const TaskComments = () => {
	const comments = [
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates suscipit sit porro natus culpa laboriosam dignissimos, veniam quae quam?',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates suscipit sit porro natus culpa laboriosam dignissimos, veniam quae quam?',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates suscipit sit porro natus culpa laboriosam dignissimos, veniam quae quam?',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates suscipit sit porro natus culpa laboriosam dignissimos, veniam quae quam?',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates suscipit sit porro natus culpa laboriosam dignissimos, veniam quae quam?',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates suscipit sit porro natus culpa laboriosam dignissimos, veniam quae quam?',
			createdAt: '12 oct. 2021',
		},
		{
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'William Steve',
				username: '@willve',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates suscipit sit porro natus culpa laboriosam dignissimos, veniam quae quam?',
			createdAt: '12 oct. 2021',
		},
	];
	return (
		<>
			<div className="block h-full w-auto overflow-y-auto">
				{comments.map((comment: any) => (
					<Fragment>
						<div className="hover:bg-400-light flex space-x-4 rounded-2xl p-4">
							<div className="relative h-10 w-10 overflow-hidden rounded-full">
								<Image
									alt="avatar"
									layout="fill"
									src={comment.author.avatar}
								/>
							</div>
							<div className="space-y-3">
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
								<p className="max-w-[626.017px]">{`${comment.content}`}</p>
							</div>
						</div>
					</Fragment>
				))}
			</div>
		</>
	);
};
