'use client'

import { motion } from 'framer-motion'
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
	const variants = {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0 },
	}

	return (
		<section className='hero sm:pt-[67px] s:pt-0'>
			<div className='container-wrapper'>
				<h1 className='visually-hidden'>
					Rodion Frontend Developer landing page
				</h1>
				<motion.div
					transition={{ duration: 0.8, ease: 'easeInOut' }}
					initial='hidden'
					animate='visible'
					variants={variants}
					className='flex justify-between gap-3 lg:flex-row s:flex-col s:items-center'
				>
					<div className='w-full max-w-[392px] relative lg:h-[511px] s:h-[438px]'>
						<Image
							className='object-cover'
							src='/images/hero/rodion.jpg'
							fill={true}
							alt='.Rodions Photo'
						/>
					</div>
					<div className='w-full max-w-[818px] lg:text-right s:text-center'>
						<h2 className='text-blue xl:text-40 sm:text-36'>Rodion Zherdev</h2>
						<ul className='w-full flex flex-col xl:pt-9 xl:gap-[60px] s:pt-6 s:gap-6'>
							{textData.map(({ id, text }) => (
								<li key={id}>
									<p className='text-darkBlue leading-relaxed xxl:text-24 lg:text-20 md:text-18 s:text-14'>
										{text}
									</p>
								</li>
							))}
						</ul>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
