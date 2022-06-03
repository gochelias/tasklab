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
		<div className="absolute">
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
		<div className="selection:bg-200-light h-full pt-60">
			<p className="h-full overflow-y-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
				quibusdam quaerat perferendis? Incidunt culpa dolor non. Eum
				illo minima magni iure est alias inventore esse quas unde
				maxime. Voluptatibus sapiente officia asperiores laboriosam
				reprehenderit tempora provident velit error a itaque debitis
				quidem, quisquam veniam eum, nisi nihil saepe laudantium
				exercitationem mollitia. Dolorem tempora ipsa quasi odio
				reiciendis alias delectus quaerat quidem sequi sint provident
				iusto, enim excepturi corporis molestiae cumque, repellat
				mollitia quisquam quae in, expedita necessitatibus! Ipsum ipsa
				necessitatibus quibusdam reprehenderit tempora accusantium,
				alias possimus. Earum impedit blanditiis consequatur quisquam
				omnis et aspernatur soluta aperiam nostrum officiis commodi
				asperiores, facere deleniti culpa at nesciunt nobis placeat!
				Modi perspiciatis optio illum error autem voluptatibus dolor
				laboriosam officiis facilis incidunt nulla dignissimos
				asperiores omnis, nemo illo tempore veniam officia neque
				aspernatur repellat qui. Repudiandae, saepe quis sunt
				voluptatibus quam, laborum eveniet fugit consectetur dolore
				reiciendis nesciunt, dignissimos debitis obcaecati suscipit odit
				reprehenderit ea blanditiis tempore delectus! At culpa odit,
				tempora impedit, molestias iusto eveniet ratione veniam
				laudantium numquam, excepturi est? Ut itaque, deleniti veniam
				expedita aut dolorum atque beatae quis nihil voluptas deserunt
				ab eius pariatur eligendi, corrupti, minus animi voluptatibus.
				Nostrum nihil dolore reprehenderit illo enim iusto architecto
				minus obcaecati quas, harum, doloribus non? Accusamus expedita
				deserunt voluptatem eligendi animi cumque quaerat non inventore
				totam doloribus, sunt doloremque nobis saepe officiis impedit!
				Sunt sequi voluptas odio consequuntur. Assumenda perferendis
				quibusdam beatae, maiores ducimus quis debitis sequi sapiente,
				pariatur doloribus voluptates aut, et dolor eos quisquam.
				Pariatur, sint. Eveniet quam repellat enim aliquam, earum error
				quod nemo voluptatum tempore similique magnam optio voluptate
				expedita ea eaque, minima in delectus aliquid magni! Rem sequi
				ipsa blanditiis, cum pariatur nam ullam, odio nulla, ab
				consectetur neque. Ipsa corporis perferendis incidunt, inventore
				explicabo commodi magnam praesentium dignissimos nam suscipit
				error fugit porro laudantium ipsam officiis iste veniam
				accusamus, unde nisi non iusto quos debitis illo velit. Nesciunt
				tempora impedit ut, beatae eveniet id! Eaque exercitationem, ad
				voluptatem impedit nisi harum ratione saepe et facilis velit
				blanditiis dolorum obcaecati tempora vel itaque aut, architecto
				in, corrupti a. Consectetur qui ipsa, fuga modi esse
				consequuntur officiis unde, quia, iusto expedita dolores.
				Praesentium voluptas iure eligendi eaque ullam consequatur. Ea,
				magnam nam. Veritatis dolorem fugiat eligendi numquam aspernatur
				voluptatem perspiciatis dolore hic nesciunt quam accusantium
				ratione consectetur beatae natus maiores deleniti veniam
				delectus optio quae id, maxime quod est. Aut culpa sit eum, hic
				nesciunt laboriosam voluptatibus provident, sed repellendus
				voluptatem iusto ullam! Dolorum non iusto esse distinctio
				pariatur assumenda inventore iure labore maxime omnis corporis
				error nostrum, corrupti est quaerat neque in reiciendis quod
				amet ex ipsa a! Explicabo omnis a corrupti, fuga voluptatibus
				nostrum perferendis. Delectus veritatis nam nostrum non vel,
				velit minus praesentium nulla eligendi voluptate sint, ducimus
				iste reiciendis voluptas provident dolorem, laborum
				reprehenderit architecto cum? Vitae maiores, fugiat aperiam nam
				officiis adipisci neque tenetur tempora facilis! Cum illum
				molestiae eaque. Sit omnis quidem nesciunt magnam veniam
				doloribus mollitia unde optio maiores consequuntur amet
				explicabo magni reiciendis asperiores, veritatis necessitatibus
				non illum laborum! - FIN
			</p>
		</div>
	</>
);
