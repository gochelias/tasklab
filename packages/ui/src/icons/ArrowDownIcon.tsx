import { Icon } from './icon.interface';

export const ArrowDownIcon = ({
	className,
	width,
	height,
	size = 24,
}: Icon) => {
	const w = width ? width.toString() : size.toString();
	const h = height ? height.toString() : size.toString();

	return (
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
				d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
