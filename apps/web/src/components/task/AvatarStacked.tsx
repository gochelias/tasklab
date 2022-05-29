import { Fragment } from 'react';
import Image from 'next/image';

export const AvatarsStacked = ({ task, max, isPreview = false }: any) => {
	const sizeX1 = {
		image: 'w-6 h-6',
		container: 'w-7 h-7',
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
						className={`${avatar.container} rounded-full bg-[#f2f2f7] flex justify-center items-center relative`}
					>
						<div
							className={`${avatar.image} overflow-hidden rounded-full relative`}
						>
							<Image alt="avatar" layout="fill" src={url} />
						</div>
					</div>
				</Fragment>
			))}
			<div
				className={`${avatar.container} ${avatar.font} flex items-center justify-center text-black bg-[#E5E5EA] border-2 border-white rounded-full relative`}
			>
				+{task.assignedTo.length - max}
			</div>
		</>
	) : (
		task.assignedTo.map((a: any) => (
			<Fragment key={task.id}>
				<div
					className={`${avatar.container} rounded-full bg-white flex justify-center items-center relative`}
				>
					<div
						className={`${avatar.image} overflow-hidden rounded-full relative`}
					>
						<Image alt="avatar" layout="fill" src={a} />
					</div>
				</div>
			</Fragment>
		))
	);
};
