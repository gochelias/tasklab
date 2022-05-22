import { Icon } from './icon.interface';

export const MaximizeIcon = ({
	active = false,
	width,
	height,
	size = 24,
}: Icon) => {
	const w = width ? width.toString() : size.toString();
	const h = height ? height.toString() : size.toString();

	return active ? (
		<svg
			width={w}
			height={h}
			viewBox={`0 0 ${w} ${h}`}
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.75 10C18.75 10.41 18.41 10.75 18 10.75C17.59 10.75 17.25 10.41 17.25 10V7.81L7.81 17.25H10C10.41 17.25 10.75 17.59 10.75 18C10.75 18.41 10.41 18.75 10 18.75H6C5.9 18.75 5.8 18.73 5.71 18.69C5.53 18.61 5.38 18.47 5.3 18.28C5.27 18.19 5.25 18.1 5.25 18V14C5.25 13.59 5.59 13.25 6 13.25C6.41 13.25 6.75 13.59 6.75 14V16.19L16.19 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.1 5.25 18.19 5.27 18.29 5.31C18.47 5.39 18.62 5.53 18.7 5.72C18.73 5.81 18.75 5.9 18.75 6V10Z" />
		</svg>
	) : (
		<svg
			width={w}
			height={h}
			viewBox={`0 0 ${w} ${h}`}
			stroke="currentColor"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18 6L6 18"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18 10V6H14"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6 14V18H10"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
