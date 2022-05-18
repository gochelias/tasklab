import { ReactElement } from 'react';

interface ISidebarButton {
	icon: ReactElement;
	text: string;
	active: boolean;
}

export const SidebarButton = ({
	icon,
	text,
	active = false,
}: ISidebarButton) => (
	<div
		className={
			active
				? 'sidebar-button sidebar-button-active'
				: 'sidebar-button sidebar-button-hover'
		}
	>
		{icon}
		<span>{text}</span>
	</div>
);
