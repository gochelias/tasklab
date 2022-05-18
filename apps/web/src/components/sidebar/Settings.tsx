import { SettingsIcon } from '@tasklab/ui';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Settings = ({ href }: any) => {
	const router = useRouter();
	const active = router.pathname === href;

	return (
		<Link href={href}>
			<a
				className={
					active
						? 'sidebar-button sidebar-button-active'
						: 'sidebar-button sidebar-button-hover'
				}
			>
				<SettingsIcon active={active} />
				<span>Settings</span>
			</a>
		</Link>
	);
};
