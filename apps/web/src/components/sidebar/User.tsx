import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

export const User = ({ href }: any) => (
	<Fragment>
		<Link href={href}>
			<a>
				<div className="flex p-4 space-x-4 border border-gray-200 dark:border-[#2C2C2E] rounded-2xl">
					<Image
						className="w-10 h-10 rounded-full"
						width={40}
						height={40}
						alt="avatar"
						src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
					/>
					<div className="flex flex-col m-auto leading-none">
						<span className="font-semibold">Natalie Jackson</span>
						<span className="text-[#8E8E93] text-base leading-none">
							@nateson
						</span>
					</div>
				</div>
			</a>
		</Link>
	</Fragment>
);
