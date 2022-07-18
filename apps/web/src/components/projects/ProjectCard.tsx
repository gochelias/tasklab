import Image from 'next/image';

export const ProjectCard = () => (
	<>
		<div className="">
			<div className="select-none rounded-2xl border-2 border-slate-100 dark:border-slate-700">
				<div className="mx-4 mt-4 flex h-24  items-center justify-between space-x-4 rounded-xl bg-slate-100 px-5 dark:bg-slate-700">
					<div className="flex items-center space-x-4">
						<div className="relative h-14 w-14 overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-600">
							<Image
								src="https://avatars.githubusercontent.com/u/14985020?s=56&v=4"
								alt="vercel"
								layout="fill"
							/>
						</div>
						<p className="text-xl font-semibold">Vercel</p>
					</div>
					<p className="text-2xl font-semibold text-slate-400">86%</p>
				</div>
				<div className="m-4 space-y-1 text-slate-400 dark:text-slate-500">
					<a
						href="https://github.com/withastro"
						className="border-blue-500 hover:border-b-2 hover:text-blue-500"
					>
						github.com/withastro
					</a>
					<p className="">13 Tasks</p>
					<p className="">8 Members</p>
				</div>
			</div>
		</div>
	</>
);
