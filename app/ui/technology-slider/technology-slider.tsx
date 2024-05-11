'use client'

import Sass from '@/slider/sass.svg'
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
		picSrc: '',
		picAlt: '',
	},
	{
		id: 4,
		picSrc: '',
		picAlt: '',
	},
	{
		id: 5,
		picSrc: '',
		picAlt: '',
	},
	{
		id: 6,
		picSrc: '',
		picAlt: '',
	},
	{
		id: 7,
		picSrc: '',
		picAlt: '',
	},
	{
		id: 8,
		picSrc: '',
		picAlt: '',
	},
]
export default function TechnologySlider() {
	return (
		<Swiper
			spaceBetween={20}
			slidesPerView='auto'
			className='w-full justify-center mt-[60px]'
		>
			{swiperSlidesData.map(({ id, picSrc, picAlt }) => (
				<SwiperSlide key={id}></SwiperSlide>
			))}
		</Swiper>
	)
}
