import { Fragment, ReactElement } from 'react';

interface IconButton {
	className?: string;
	icon: ReactElement;
}

export const IconButton = ({ className, icon }: IconButton) => (
	<>
		<button className={`icon-button icon-button-hover ${className}`}>
			{icon}
		</button>
	</>
);
