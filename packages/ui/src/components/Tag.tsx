interface Tag {
	label: string;
	emoji?: string;
}

export const Tag = ({ label, emoji }: Tag) => (
	<>
		<p className={emoji ? 'mr-2' : ''}>{emoji}</p>
		<p className="leading-snug">{label}</p>
	</>
);
