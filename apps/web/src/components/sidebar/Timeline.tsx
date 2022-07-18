import { CalendarIcon, SidebarButton } from '@tasklab/ui';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Timeline = ({ href, sidebarIsOpen }: any) => {
	const router = useRouter();
	const active = router.pathname === href;

	return (
		<div>
			<Link href={href}>
				<a className="flex">
					<SidebarButton
						icon={<CalendarIcon active={active} />}
						text="Timeline"
						active={active}
						sidebarIsOpen={sidebarIsOpen}
					/>
				</a>
			</Link>
		</div>
	);
};
