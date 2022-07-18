import { HomeIcon, SidebarButton } from '@tasklab/ui';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Home = ({ href, sidebarIsOpen }: any) => {
	const router = useRouter();
	const active =
		router.pathname === href || router.pathname.includes('projects');

	return (
		<Link href={href}>
			<a className="inline-block h-12 overflow-hidden">
				<SidebarButton
					icon={<HomeIcon active={active} />}
					text="Home"
					active={active}
					sidebarIsOpen={sidebarIsOpen}
				/>
			</a>
		</Link>
	);
};
