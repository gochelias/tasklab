export const SearchIcon = ({ active = false }: any) => {
	return active ? (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" />
			<path d="M21.3005 21.9986C21.1205 21.9986 20.9405 21.9286 20.8105 21.7986L18.9505 19.9386C18.6805 19.6686 18.6805 19.2286 18.9505 18.9486C19.2205 18.6786 19.6605 18.6786 19.9405 18.9486L21.8005 20.8086C22.0705 21.0786 22.0705 21.5186 21.8005 21.7986C21.6605 21.9286 21.4805 21.9986 21.3005 21.9986Z" />
		</svg>
	) : (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke="currentColor"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 22L20 20"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
