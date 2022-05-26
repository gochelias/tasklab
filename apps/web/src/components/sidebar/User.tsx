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
					<div className="flex p-4 space-x-4 border-2 border-[#f2f2f7] dark:border-[#2C2C2E] rounded-2xl">
						<div className="w-10 h-10 rounded-full relative overflow-hidden">
							<Image layout="fill" alt="avatar" src={img} />
						</div>
						<div className="flex flex-col m-auto leading-none">
							<p className="font-semibold">Natalie Jackson</p>
							<p className="text-[#8E8E93] text-base leading-none">
								@nateson
							</p>
						</div>
					</div>
				</a>
			</Link>
		</Fragment>
	);
};
