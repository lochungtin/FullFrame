import { useRouter } from 'next/router';

export default function Link({ text, href }) {
	const router = useRouter();
	const handleClick = (ev) => {
		ev.preventDefault();
		router.push(href);
	};
	return (
		<a href={href} onClick={handleClick}>
			{text}
		</a>
	);
}
