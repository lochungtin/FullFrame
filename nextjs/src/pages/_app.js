import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>FullFrame NextJS</title>
				<meta name='description' content='Project FullFrame App' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='./favicon.ico' />
				<link href='https://fonts.googleapis.com/css2?family=Nova+Square' rel='stylesheet' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
