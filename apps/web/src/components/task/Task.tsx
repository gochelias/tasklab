import { Tag } from '@tasklab/ui';

export const Task = () => (
	<>
		<h1 className="text-3xl font-semibold dark:text-[#f2f2f7] ">
			Title Example
		</h1>
		<div className="flex my-4 text-sm space-x-2 py-4 pl-1">
			<button className="tag">
				<Tag label="Style Guide" emoji="🚀" />
			</button>
			<button className="tag">
				<Tag label="Design System" />
			</button>
			{/* <span className="px-3 py-2 rounded-2xl">+</span> */}
		</div>
		<p>Description</p>
	</>
);
