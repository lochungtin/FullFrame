import { data, geo } from '@/components/api';
import Content from '@/components/content';
import Link from '@/components/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const [input, setInput] = useState('');
	const [content, setContent] = useState(undefined);

	const textChange = (ev) => setInput(ev.target.value);

	const search = async () => {
		if (!input) return;

		setContent(undefined);
		const g = await geo(input);
		const d = await data(g);
		setContent(d);
	};

	const toggleFav = async () => {
		if (!input) return;

		const g = await geo(input);
		localStorage.setItem('fullframe:' + g.lat + ':' + g.lon, g.name);
	};

	// console.log(localStorage.getItem('search'));

	return (
		<>
			<main>
				<header>
					<button onClick={toggleFav}>
						<Image src='/unfav.png' width={30} height={30} alt='location' />
					</button>
					<input type='text' placeholder='location' value={input} onChange={textChange}></input>
					<button onClick={search}>
						<Image src='/search.png' width={28} height={28} alt='search' />
					</button>
				</header>
				{content ? <Content {...content} /> : <></>}
			</main>
			<Link text='FAVOURITES' href='/fav' />
		</>
	);
}
