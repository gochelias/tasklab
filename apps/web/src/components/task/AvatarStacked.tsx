import Image from 'next/image';
import { Fragment } from 'react';

export const AvatarsStacked = ({ task, min }: any) => {
	const size = 'w-9 h-9';

	return task.assignedTo.length > min ? (
		<>
			{task.assignedTo.slice(-min).map((url: string) => (
				<Fragment key={task.id}>
					<div
						className={`${size} rounded-full bg-[#f2f2f7] flex justify-center items-center relative`}
					>
						<div className="w-8 h-8 overflow-hidden rounded-full relative">
							<Image alt="avatar" layout="fill" src={url} />
						</div>
					</div>
				</Fragment>
			))}
			<div
				className={`${size} flex items-center justify-center text-xs font-medium text-black bg-[#f2f2f7] border-2 border-white rounded-full relative`}
			>
				+{task.assignedTo.length - min}
			</div>
		</>
	) : (
		task.assignedTo.map((a: any) => (
			<Fragment key={task.id}>
				<div
					className={`${size} rounded-full bg-white flex justify-center items-center relative`}
				>
					<div className="w-8 h-8 overflow-hidden rounded-full relative">
						<Image alt="avatar" layout="fill" src={a} />
					</div>
				</div>
			</Fragment>
		))
	);
};
