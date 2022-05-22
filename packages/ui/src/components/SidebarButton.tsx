import { ReactElement } from 'react';

interface SidebarButton {
	icon: ReactElement;
	text: string;
	active: boolean;
}

export const SidebarButton = ({
	icon,
	text,
	active = false,
}: SidebarButton) => (
	<div
		className={
			active
				? 'sidebar-button sidebar-button-active'
				: 'sidebar-button sidebar-button-hover'
		}
	>
		{icon}
		<span className="my-auto">{text}</span>
	</div>
);
