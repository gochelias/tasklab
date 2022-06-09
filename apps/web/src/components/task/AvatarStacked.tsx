import { Fragment } from 'react';
import Image from 'next/image';

export const AvatarsStacked = ({ assigned, max, isPreview = false }: any) => {
	const sizeX1 = {
		image: 'w-6 h-6',
		container: 'w-6 h-6',
		font: 'text-xs font-medium',
	};
	const sizeX2 = {
		image: 'w-8 h-8',
		container: 'w-9 h-9',
		font: 'text-base font-normal',
	};

	const avatar = isPreview ? sizeX2 : sizeX1;

	return assigned.length > max ? (
		<>
			{assigned.slice(-max).map((user: any) => (
				<Fragment key={user.id}>
					<div
						className={`${avatar.image} relative overflow-hidden rounded-full ring-2 ring-white dark:ring-black`}
					>
						<Image
							alt="avatar"
							layout="fill"
							src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=8"
						/>
					</div>
				</Fragment>
			))}
			<div
				className={`${avatar.container} ${avatar.font} bg-300-light dark:bg-300-dark dark:text-100-dark text-100-light relative flex items-center justify-center rounded-full border-2 border-white dark:border-black`}
			>
				+1{/* {assigned.assignedTo.length - max} */}
			</div>
		</>
	) : (
		assigned.map((user: any) => (
			<Fragment key={user.id}>
				<div
					className={`${avatar.container} relative overflow-hidden rounded-full ring-2 ring-white dark:ring-black`}
				>
					<Image
						alt="avatar"
						layout="fill"
						src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=8"
					/>
				</div>
			</Fragment>
		))
	);
};
