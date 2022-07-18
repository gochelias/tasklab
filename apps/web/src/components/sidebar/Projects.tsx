import { AddSquareIcon, SidebarButton } from '@tasklab/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Projects = ({ href, sidebarIsOpen }: any) => {
	const router = useRouter();
	const active =
		router.pathname === href || router.pathname.includes('projects');

	return (
		<div>
			<Link href={href}>
				<a>
					<SidebarButton
						icon={<AddSquareIcon active={active} />}
						text="Projects"
						active={active}
						sidebarIsOpen={sidebarIsOpen}
					/>
				</a>
			</Link>
		</div>
	);
};
