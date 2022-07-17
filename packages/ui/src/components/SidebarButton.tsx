import { ReactElement } from 'react';

interface SidebarButton {
	icon: ReactElement;
	text: string;
	active: boolean;
	sidebarIsOpen: boolean;
}

export const SidebarButton = ({
	icon,
	text,
	active = false,
	sidebarIsOpen,
}: SidebarButton) => (
	<div
		className={`sidebar-button
						${sidebarIsOpen ? 'w-12 px-3' : 'w-72 px-4'}
						${active ? 'sidebar-button-active' : 'sidebar-button-hover'}
					`}
	>
		{icon}
		<span className={`my-auto ${sidebarIsOpen && 'hidden'}`}>{text}</span>
	</div>
);
