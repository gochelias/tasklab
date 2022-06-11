import { Scrollbars } from 'react-custom-scrollbars';
import { NoDescription } from './NoDescription';

export const TaskDescription = (props: any) => {
	const customThumb = () => (
		<div className="bg-200-light dark:bg-200-dark rounded-full" />
	);

	return (
		<>
			<Scrollbars renderThumbVertical={customThumb} universal={true}>
				{props.description ? (
					<p className="pr-4 pb-8">{props.description}</p>
				) : (
					<div className="flex h-full select-none items-center justify-center">
						<NoDescription />
					</div>
				)}
			</Scrollbars>
		</>
	);
};
