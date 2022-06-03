import { CalendarIcon, ProfileUserIcon, Tag, TagIcon } from '@tasklab/ui';
import moment from 'moment';
import { AvatarsStacked } from './AvatarStacked';

const startsAtDate = moment('2022-05-16T16:04:02.715Z').format('MMM Do YY');
const startsAt = moment('2022-05-16T16:04:02.715Z').fromNow();
const endsAt = moment('2022-06-16T16:04:02.715Z').fromNow();
const endsAtDate = moment('2022-06-16T16:04:02.715Z').format('MMM Do YY');

const img =
	'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80';
const task = {
	id: '1',
	title: 'Title example',
	assignedTo: [img, img, img, img, img],
};

export const TaskInfo = () => (
	<>
		<div className="">
			<h1 className="text-3xl font-semibold">Title Example</h1>
			<div className="my-8 space-y-5">
				<div className="text-100-light dark:text-100-dark flex select-none items-center space-x-5">
					<CalendarIcon />
					<p>
						Started{' '}
						<span
							title={startsAtDate}
							className="decoration-200-light dark:decoration-200-dark text-black underline dark:text-white"
						>
							{startsAt}
						</span>{' '}
						and ends{' '}
						<span
							title={endsAtDate}
							className="decoration-200-light dark:decoration-200-dark text-black underline dark:text-white"
						>{`${endsAt}`}</span>
					</p>
				</div>
				<div className="text-100-light dark:text-100-dark flex select-none items-center space-x-5">
					<ProfileUserIcon />
					<div className="flex items-center -space-x-2 ">
						<AvatarsStacked task={task} max="20" isPreview={true} />
					</div>
				</div>
				<div className="my-4 flex items-center space-x-5">
					<TagIcon className="text-100-light dark:text-100-dark" />
					<div className="flex space-x-2 text-sm ">
						<button className="tag">
							<Tag label="Style Guide" emoji="🚀" />
						</button>
						<button className="tag">
							<Tag label="Design System" />
						</button>
					</div>
				</div>
			</div>
		</div>
		<div className="selection:bg-200-light h-[45em] overflow-y-auto pb-4">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam
			nisi tempora mollitia placeat perferendis porro excepturi explicabo
			fugiat sequi deleniti cum temporibus dicta voluptatibus nulla
			deserunt, ullam magni vel error quisquam obcaecati, unde veritatis
			sint similique. Accusamus provident dolor accusantium tempore, sunt
			nam odit voluptatem porro quae ut vitae alias magni ducimus ea esse,
			eius cupiditate atque asperiores officia eos quasi fugiat quo.
			Ducimus nostrum sapiente consequatur necessitatibus. Maxime, enim!
			Quam quaerat porro deserunt sint libero officia at. Necessitatibus
			tempora labore deleniti quibusdam soluta quos laboriosam, sint
			temporibus cupiditate ut, quo quia laborum atque nostrum unde
			assumenda sapiente cumque dolore ipsam provident. Perferendis
			voluptas ipsum, dolor illum optio repellendus itaque accusamus
			nesciunt omnis fugit nam quam distinctio nulla vitae assumenda
			laudantium dignissimos placeat sint quisquam delectus quidem aliquam
			error. Earum quibusdam libero eligendi repellat adipisci molestias
			explicabo nulla et minus beatae! Deleniti corporis unde voluptas
			tenetur nisi alias! Rem dolore aspernatur ea cum quis quia, neque
			reprehenderit? Debitis deleniti sequi libero sunt temporibus,
			explicabo eos repudiandae nihil aperiam dolor aliquid reiciendis
			placeat officiis vel in perspiciatis aliquam at beatae, quos commodi
			quia! Animi, maxime dolorum aut harum, quod assumenda ea expedita
			porro aspernatur modi reprehenderit, asperiores explicabo! Ducimus
			cupiditate aspernatur iure hic labore, quam tempora, dolore quas
			explicabo non autem sit voluptates, adipisci repellendus! Esse
			mollitia repellendus dicta, quisquam corporis minus, neque
			voluptatibus reprehenderit alias eius placeat eum perspiciatis
			reiciendis ab at aut similique deserunt fugiat nostrum nihil
			temporibus porro quae. Illum et, repellendus nam, sit voluptatem
			eaque placeat veniam quas, reiciendis iste perspiciatis voluptatibus
			dolorem suscipit sed fuga ea cum sapiente aliquid! Iusto est,
			adipisci enim fuga sit cupiditate ut aliquam officiis dolore?
			Repellendus neque dolore atque, quis esse aspernatur nesciunt
			blanditiis amet consequatur optio illo sit quod distinctio ducimus!
			Exercitationem, accusamus molestiae eius id dolorum aperiam maxime.
			Deleniti, laudantium! Exercitationem cum quo alias hic, recusandae
			labore, aliquid aspernatur obcaecati dolor incidunt similique
			blanditiis quidem voluptate pariatur magni, velit ea sed! Eveniet
			veniam corrupti tempora perspiciatis in natus, quibusdam
			consequuntur consectetur rerum accusamus veritatis maiores, illum
			esse numquam! Quasi incidunt voluptas itaque distinctio expedita
			maiores asperiores, dolorem, molestiae necessitatibus omnis dolore.
			Numquam corporis ab quibusdam! Veniam harum possimus nulla
			voluptatibus quam magni consequuntur tempore. Tenetur a atque
			doloremque, rerum et laborum aut quae assumenda repellat eveniet
			aliquid. Quasi nihil illum optio tempore et saepe eos, eligendi
			vitae dicta veritatis quos cumque necessitatibus excepturi facilis
			modi odio beatae totam dolorum voluptates eaque? Animi reiciendis
			quas libero inventore ratione cupiditate eveniet quam molestias
			consequuntur dolor, deleniti et molestiae quia maxime atque
			reprehenderit voluptatum, debitis blanditiis accusamus ab fuga ad
			tempore saepe veritatis. Neque odit minima magni ad tenetur.
			Expedita eaque totam cum. Corporis nam, inventore magni voluptatem
			sit, facere doloremque repellendus expedita provident perspiciatis
			reiciendis nobis voluptas praesentium? Itaque, molestiae quam
			dolores omnis fugiat eius mollitia laborum laudantium id esse ab
			amet accusamus quos ipsa doloribus provident quis illo voluptatibus
			eaque nihil excepturi nesciunt odit nulla quidem? Nam laboriosam
			doloribus omnis, maiores repudiandae, illo velit, nisi commodi
			repellendus fuga quisquam. fin
		</div>
	</>
);
