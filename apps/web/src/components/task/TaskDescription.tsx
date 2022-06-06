import { Scrollbars } from 'react-custom-scrollbars';

export const TaskDescription = (props: any) => {
	const customThumb = () => (
		<div className="bg-200-light dark:bg-200-dark rounded-full" />
	);

	return (
		<>
			<Scrollbars renderThumbVertical={customThumb} universal={true}>
				<p className="pr-4 pb-8">{props.description}</p>
			</Scrollbars>
		</>
	);
};
