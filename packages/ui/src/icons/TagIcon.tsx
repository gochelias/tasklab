import { Icon } from './icon.interface';

export const TagIcon = ({
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
			<path d="M19.8305 8.6998L15.3005 4.1698C14.3505 3.2198 13.0405 2.7098 11.7005 2.7798L6.70046 3.0198C4.70046 3.1098 3.11046 4.6998 3.01046 6.6898L2.77046 11.6898C2.71046 13.0298 3.21046 14.3398 4.16046 15.2898L8.69046 19.8198C10.5505 21.6798 13.5705 21.6798 15.4405 19.8198L19.8305 15.4298C21.7005 13.5798 21.7005 10.5598 19.8305 8.6998ZM9.50046 12.3798C7.92046 12.3798 6.62046 11.0898 6.62046 9.4998C6.62046 7.9098 7.92046 6.6198 9.50046 6.6198C11.0805 6.6198 12.3805 7.9098 12.3805 9.4998C12.3805 11.0898 11.0805 12.3798 9.50046 12.3798ZM17.5305 13.5298L13.5305 17.5298C13.3805 17.6798 13.1905 17.7498 13.0005 17.7498C12.8105 17.7498 12.6205 17.6798 12.4705 17.5298C12.1805 17.2398 12.1805 16.7598 12.4705 16.4698L16.4705 12.4698C16.7605 12.1798 17.2405 12.1798 17.5305 12.4698C17.8205 12.7598 17.8205 13.2398 17.5305 13.5298Z" />
		</svg>
	) : (
		<svg
			className={className}
			width={w}
			height={h}
			viewBox={`0 0 ${w} ${h}`}
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.40476 15.5264L8.93476 20.0564C10.7948 21.9164 13.8148 21.9164 15.6848 20.0564L20.0748 15.6664C21.9348 13.8064 21.9348 10.7864 20.0748 8.91637L15.5348 4.39637C14.5848 3.44637 13.2748 2.93637 11.9348 3.00637L6.93476 3.24637C4.93476 3.33637 3.34476 4.92637 3.24476 6.91637L3.00476 11.9164C2.94476 13.2664 3.45476 14.5764 4.40476 15.5264Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.73486 12.2263C11.1156 12.2263 12.2349 11.107 12.2349 9.72632C12.2349 8.34561 11.1156 7.22632 9.73486 7.22632C8.35415 7.22632 7.23486 8.34561 7.23486 9.72632C7.23486 11.107 8.35415 12.2263 9.73486 12.2263Z"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M13.2349 17.2263L17.2349 13.2263"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};