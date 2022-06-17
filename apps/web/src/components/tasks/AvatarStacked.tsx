import { Fragment } from 'react';
import Image from 'next/image';

export const AvatarsStacked = ({ assigned, max, isPreview = false }: any) => {
	const sizeX1 = {
		image: 'w-6 h-6',
		container: 'w-6 h-6',
		font: 'text-xs font-medium',
	};
	const sizeX2 = {
		image: 'w-10 h-10',
		container: 'w-11 h-11',
		font: 'text-base font-normal',
	};

	const avatar = isPreview ? sizeX2 : sizeX1;

	return assigned.length > max ? (
		<>
			{assigned.slice(-max).map((user: any) => (
				<Fragment key={user.id}>
					<div
						className={`${avatar.image} relative overflow-hidden rounded-full ring-2 ring-white dark:ring-slate-900`}
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
				className={`${avatar.container} ${avatar.font} relative flex items-center justify-center rounded-full border-2 border-white bg-slate-100 text-slate-500 dark:border-slate-900 dark:bg-slate-700 dark:text-slate-400`}
			>
				+1{/* {assigned.assignedTo.length - max} */}
			</div>
		</>
	) : (
		assigned.map((user: any) => (
			<Fragment key={user.id}>
				<div
					className={`${avatar.image} relative overflow-hidden rounded-full ring-2 ring-white dark:ring-slate-900`}
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
