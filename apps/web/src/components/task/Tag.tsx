export const Tag = ({ label, emoji }: any) => (
	<button className="tag">
		<p className={emoji ? 'mr-2' : ''}>{emoji}</p>
		<p>{label}</p>
	</button>
);
