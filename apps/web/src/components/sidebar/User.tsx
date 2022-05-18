import Image from 'next/image';

export const User = () => (
	<div className="flex p-4 space-x-4 border border-gray-200 rounded-xl">
		<Image
			className="w-10 h-10 rounded-full"
			width={40}
			height={40}
			alt="avatar"
			src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
		/>
		<div className="flex flex-col space-y-0">
			<span className="font-semibold">Natalie Jackson</span>
			<span className="text-gray-500 text-sm leading-3">@nateson</span>
		</div>
	</div>
);
