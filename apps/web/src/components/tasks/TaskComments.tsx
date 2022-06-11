import { Fragment } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { Comment } from './Comment';
import { CreateComment } from './CreateComment';
import { NoComments } from './NoComments';

export const TaskComments = () => {
	const customThumb = () => (
		<div className="bg-200-light dark:bg-200-dark rounded-full" />
	);

	const comments: any[] = [
		{
			id: 1,
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
			id: 2,
			author: {
				avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
				name: 'Jack Smith',
				username: '@jckmi',
			},
			content:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
			createdAt: '12 oct. 2021',
		},
	];
	return (
		<>
			<Scrollbars renderThumbVertical={customThumb}>
				<div className="h-full">
					{comments.length > 0 ? (
						comments.map((comment: any) => (
							<Fragment key={comment.id}>
								<Comment comment={comment} />
							</Fragment>
						))
					) : (
						<div className="flex h-full select-none items-center justify-center">
							<NoComments />
						</div>
					)}
				</div>
			</Scrollbars>
			<div className="flex h-20 items-end">
				<CreateComment />
			</div>
		</>
	);
};
