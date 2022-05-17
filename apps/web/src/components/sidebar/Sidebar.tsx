import { Home, Calendar, User, Settings } from '@tasklab/ui';
import Link from 'next/link';

export const Sidebar = () => (
	<div className="flex flex-col w-64 h-screen border-r border-gray-200 justify-between">
		<div>Tasklab</div>
		<div className="px-4">
			<ul className="space-y-4">
				<li>
					<Link href="/">
						<a>
							<Home />
						</a>
					</Link>
				</li>
				<li>
					<Link href="/calendar">
						<a>
							<Calendar />
						</a>
					</Link>
				</li>
			</ul>
		</div>
		<div>
			<Settings />
			<hr className="border-gray-200" />
			<User />
		</div>
	</div>
);
