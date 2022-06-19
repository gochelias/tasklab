import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

export const User = ({ href }: any) => {
	const img =
		'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80';

	return (
		<Fragment>
			<Link href={href}>
				<a>
					<div className="flex space-x-4 rounded-2xl border-2 border-slate-100 p-4 dark:border-slate-700">
						<div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-slate-100 dark:ring-slate-700">
							<Image layout="fill" alt="avatar" src={img} />
						</div>
						<div className="m-auto flex flex-col leading-none">
							<p className="font-semibold text-slate-700 dark:text-slate-200">
								Natalie Jackson
							</p>
							<p className="text-base leading-none text-slate-500 dark:text-slate-400">
								@nateson
							</p>
						</div>
					</div>
				</a>
			</Link>
		</Fragment>
	);
};
