import { SettingsIcon, SidebarButton } from '@tasklab/ui';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Settings = ({ href }: any) => {
	const router = useRouter();
	const active = router.pathname === href;

	return (
		<Link href={href}>
			<a>
				<SidebarButton
					icon={<SettingsIcon active={active} />}
					text="Settings"
					active={active}
				/>
			</a>
		</Link>
	);
};
