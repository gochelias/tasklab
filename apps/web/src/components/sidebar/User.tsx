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
					<div className="border-300-light dark:border-300-dark flex space-x-4 rounded-2xl border-2 p-4">
						<div className="ring-300-light dark:ring-300-dark relative h-10 w-10 overflow-hidden rounded-full ring-2">
							<Image layout="fill" alt="avatar" src={img} />
						</div>
						<div className="m-auto flex flex-col leading-none">
							<p className="font-semibold">Natalie Jackson</p>
							<p className="text-100-light dark:text-100-dark text-base leading-none">
								@nateson
							</p>
						</div>
					</div>
				</a>
			</Link>
		</Fragment>
	);
};
