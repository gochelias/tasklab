import { CategoryIcon, SidebarButton } from '@tasklab/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Dashboard = ({ href }: any) => {
	const router = useRouter();
	const active = router.pathname === href;

	return (
		<Link href={href}>
			<a>
				<SidebarButton
					icon={<CategoryIcon active={active} />}
					text="Dashboard"
					active={active}
				/>
			</a>
		</Link>
	);
};
