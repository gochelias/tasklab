import { Fragment } from 'react';
import Image from 'next/image';

export const AvatarsStacked = ({ task, max, isPreview = false }: any) => {
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

	return task.assignedTo.length > max ? (
		<>
			{task.assignedTo.slice(-max).map((url: string) => (
				<Fragment key={task.id}>
					<div
						className={`${avatar.image} relative overflow-hidden rounded-full ring-2 ring-white dark:ring-black`}
					>
						<Image alt="avatar" layout="fill" src={url} />
					</div>
				</Fragment>
			))}
			<div
				className={`${avatar.container} ${avatar.font} bg-300-light dark:bg-300-dark dark:text-100-dark text-100-light relative flex items-center justify-center rounded-full border-2 border-white dark:border-black`}
			>
				+{task.assignedTo.length - max}
			</div>
		</>
	) : (
		task.assignedTo.map((a: any) => (
			<Fragment key={task.id}>
				<div
					className={`${avatar.container} relative overflow-hidden rounded-full ring-2 ring-white dark:ring-black`}
				>
					<Image alt="avatar" layout="fill" src={a} />
				</div>
			</Fragment>
		))
	);
};
