'use client'

import Git from '@/slider/git.png'
import NextJS from '@/slider/nextjs.png'
import ReactJS from '@/slider/reactjs.png'
import ReduxToolkit from '@/slider/redux.png'
import Scss from '@/slider/scss.png'
import TailwindCSS from '@/slider/tailwind.png'
import Vite from '@/slider/vite.png'
import Webpack from '@/slider/webpack.png'
import Zustand from '@/slider/zustand.png'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'

interface swiperSlidesProps {
	id: number
	picSrc: any
	picAlt: string
}

const swiperSlidesData: swiperSlidesProps[] = [
	{
		id: 1,
		picSrc: NextJS,
		picAlt: 'NextJS icon',
	},
	{
		id: 2,
		picSrc: ReactJS,
		picAlt: 'ReactJS icon',
	},
	{
		id: 3,
		picSrc: Zustand,
		picAlt: 'Zustand icon',
	},
	{
		id: 4,
		picSrc: ReduxToolkit,
		picAlt: 'Redux Toolkit icon',
	},
	{
		id: 5,
		picSrc: TailwindCSS,
		picAlt: 'TailwindCSS icon',
	},
	{
		id: 6,
		picSrc: Scss,
		picAlt: 'SASS icon',
	},
	{
		id: 7,
		picSrc: Webpack,
		picAlt: 'Webpack icon',
	},
	{
		id: 8,
		picSrc: Vite,
		picAlt: 'Vite icon',
	},
	{
		id: 9,
		picSrc: Git,
		picAlt: 'Git icon',
	},
]
export default function TechnologySlider() {
	return (
		<Swiper
			slidesPerView={6}
			breakpoints={{
				320: {
					slidesPerView: 4,
					spaceBetween: 0,
				},
				768: {
					slidesPerView: 6,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 6,
					spaceBetween: 20,
				},
			}}
			spaceBetween={20}
			modules={[Pagination]}
			pagination={{
				clickable: true,
			}}
			className='w-full overflow-hidden xl:h-[152px] xl:mt-[60px] lg:h-[130px] s:mt-6 s:h-[110px]'
		>
			{swiperSlidesData.map(({ id, picSrc, picAlt }) => (
				<SwiperSlide className='swiper-slide max-h-[80px]' key={id}>
					<Image
						className='mx-auto s:w-[50px] s:h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px]'
						src={picSrc}
						width={80}
						height={80}
						alt={picAlt}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
