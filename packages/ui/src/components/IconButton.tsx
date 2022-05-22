import { Fragment, ReactElement } from 'react';

interface IconButton {
	icon: ReactElement;
}

export const IconButton = ({ icon }: IconButton) => (
	<Fragment>
		<button className="icon-button"> {icon} </button>
	</Fragment>
);
