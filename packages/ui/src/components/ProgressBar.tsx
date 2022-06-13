export const ProgressBar = ({ value }: { value: number }) => (
	<>
		<div
			className={`bg-300-light dark:bg-300-dark h-1.5 w-full rounded-full`}
		>
			<div
				className="bg-blue-light dark:bg-blue-dark h-1.5 rounded-full"
				style={{ width: `${value}%` }}
			/>
		</div>
	</>
);
