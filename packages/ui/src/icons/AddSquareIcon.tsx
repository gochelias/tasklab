import { Icon } from './icon.interface';

export const AddSquareIcon = ({
	className,
	active = false,
	width,
	height,
	size = 24,
}: Icon) => {
	const w = width ? width.toString() : size.toString();
	const h = height ? height.toString() : size.toString();

	return active ? (
		<svg
			className={className}
			width={w}
			height={h}
			viewBox={`0 0 ${w} ${h}`}
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" />
		</svg>
	) : (
		<svg
			className={className}
			width={w}
			height={h}
			viewBox={`0 0 ${w} ${h}`}
			stroke="currentColor"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8 12H16"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 16V8"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
