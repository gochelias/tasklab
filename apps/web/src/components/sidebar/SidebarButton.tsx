import Link from 'next/link';
import { ReactElement } from 'react';

interface ISidebarButton {
	text: string;
	icon: ReactElement;
	href: string;
	active: boolean;
}

export const SidebarButton = ({ text, icon, href, active }: ISidebarButton) => (
	<Link href={href}>
		<a
			className={
				active
					? 'sidebar-button sidebar-button-active'
					: 'sidebar-button sidebar-button-hover'
			}
		>
			{icon}
			<span>{text}</span>
		</a>
	</Link>
);
