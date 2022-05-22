import { Switch } from '@headlessui/react';
import { Fragment, useState } from 'react';

const SettingsRoute = () => {
	const [enabled, setEnabled] = useState(false);

	const root = window.document.documentElement;
	if (enabled) {
		root.classList.add('dark');
	} else if (enabled === false) {
		root.classList.remove('dark');
	}

	return (
		<Fragment>
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${
					enabled ? 'bg-[#0A84FF]' : 'bg-[#C7C7CC]'
				} relative inline-flex h-6 w-11 items-center rounded-full`}
			>
				<span className="sr-only">Enable notifications</span>
				<span
					className={`${
						enabled ? 'translate-x-6' : 'translate-x-1'
					} inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-150`}
				/>
			</Switch>
		</Fragment>
	);
};

export default SettingsRoute;
