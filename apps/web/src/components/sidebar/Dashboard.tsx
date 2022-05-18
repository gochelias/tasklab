import { CategoryIcon } from '@tasklab/ui';
import { useRouter } from 'next/router';
import { SidebarButton } from './SidebarButton';

export const Dashboard = ({ href }: any) => {
	const router = useRouter();
	const active = router.pathname === href;

	return (
		<SidebarButton
			text="Dashboard"
			icon={<CategoryIcon active={active} />}
			href={href}
			active={active}
		/>
	);
};
