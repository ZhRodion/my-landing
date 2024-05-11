import Image from 'next/image'

const textData = [
	{
		id: 1,
		text: 'I am a Frontend Developer with over 4 years of commercial development experience. My expertise includes developing intricate user interfaces, enhancing web application performance, and implementing innovative functional capabilities. My objective is to continuously evolve and stay abreast of the latest technologies and methodologies in web development.',
	},
	{
		id: 2,
		text: 'I am a Frontend Developer with over 4 years of commercial development experience. My expertise includes developing intricate ',
	},
]

export default function Hero() {
	return (
		<section className='hero'>
			<div className='container-wrapper'>
				<h1 className='visually-hidden'>
					Rodion Frontend Developer landing page
				</h1>
				<div className='flex justify-between gap-3'>
					<div className='w-full max-w-[392px] h-[511px] relative'>
						<Image
							src='/images/hero/rodion.jpg'
							fill={true}
							alt='.Rodions Photo'
						/>
					</div>
					<div className='w-full max-w-[818px] text-right'>
						<h2 className='text-blue text-40'>Rodion Zherdev</h2>
						<ul className='w-full pt-9 flex flex-col gap-[60px]'>
							{textData.map(({ id, text }) => (
								<li key={id}>
									<p className='text-darkBlue text-24 leading-relaxed'>
										{text}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
