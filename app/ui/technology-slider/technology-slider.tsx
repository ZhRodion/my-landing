'use client'

import Sass from '@/slider/sass.svg?url'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

const swiperSlidesData = [
	{
		id: 1,
		picSrc: Sass,
		picAlt: '',
	},
	{
		id: 2,
		picSrc: Sass,
		picAlt: '',
	},
	{
		id: 3,
		picSrc: Sass,
		picAlt: '',
	},
	{
		id: 4,
		picSrc: Sass,
		picAlt: '',
	},
	{
		id: 5,
		picSrc: Sass,
		picAlt: '',
	},
	{
		id: 6,
		picSrc: Sass,
		picAlt: '',
	},
	{
		id: 7,
		picSrc: Sass,
		picAlt: '',
	},
	{
		id: 8,
		picSrc: Sass,
		picAlt: '',
	},
]
export default function TechnologySlider() {
	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={6}
			className='w-full justify-center mt-[60px] overflow-hidden'
		>
			{swiperSlidesData.map(({ id, picSrc, picAlt }) => (
				<SwiperSlide key={id}>
					<Image src={picSrc} width={60} height={60} alt={picAlt} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
