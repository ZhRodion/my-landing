'use client'

import TechnologySlider from '@/technology-slider/technology-slider'
import { motion } from 'framer-motion'

export default function Technology() {
	const variants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
	}
	return (
		<section className='technology xl:py-[108px] lg:py-16 s:py-10'>
			<div className='container-wrapper'>
				<motion.div
					transition={{ duration: 0.8, ease: 'easeInOut' }}
					initial='hidden'
					animate='visible'
					variants={variants}
				>
					<h2 className='text-blue text-center xl:text-40 s:text-36'>
						Technology stack
					</h2>
					<TechnologySlider />
				</motion.div>
			</div>
		</section>
	)
}
