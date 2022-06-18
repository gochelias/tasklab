export const ProgressBar = ({ value }: { value: number }) => (
	<>
		<div
			className={`h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700`}
		>
			<div
				className="h-1.5 rounded-full bg-blue-500 dark:bg-blue-500"
				style={{ width: `${value}%` }}
			/>
		</div>
	</>
);
