import Image from 'next/image';

export default function Content({ icon, temp, humid }) {
	return (
		<article>
			<Image src={'https://openweathermap.org/img/wn/' + icon + '@2x.png'} width={120} height={120} alt='icon' />
			<div>
				<div>
					<Image src='/temp.png' width={30} height={30} alt='temp' />
					<p>{temp}°C</p>
				</div>
				<div>
					<Image src='/humid.png' width={30} height={30} alt='humidity' />
					<p>{humid}%</p>
				</div>
			</div>
		</article>
	);
}
