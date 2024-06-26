'use client'

import { Box } from '@mui/material'
import Modal from '@mui/material/Modal'

import { useState } from 'react'

import EmailIcon from '@/modal/email.svg?url'
import GitHubIcon from '@/modal/gh.svg?url'
import TelegramIcon from '@/modal/tg.svg?url'
import WhatsappIcon from '@/modal/wa.svg?url'

import Image from 'next/image'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '100%',
	bgcolor: 'background.paper',
	border: '2px solid #10316B',
	boxShadow: 24,
	p: 4,
}

interface socialMediaProps {
	id: number
	href: string
	icon: any
	alt: string
}

const socialMeadiaData: socialMediaProps[] = [
	{
		id: 1,
		href: 'https://t.me/Rodion_Zherdev',
		icon: TelegramIcon,
		alt: 'Telegram icon',
	},
	{
		id: 2,
		href: 'https://wa.me/message/BQS5FPK5PTQAG1',
		icon: WhatsappIcon,
		alt: 'Whatsapp icon',
	},
	{
		id: 3,
		href: 'mailto:jerdew.r@icloud.com',
		icon: EmailIcon,
		alt: 'Email icon',
	},
	{
		id: 4,
		href: 'https://github.com/ZhRodion',
		icon: GitHubIcon,
		alt: 'GitHub icon',
	},
]

export default function ContactModal() {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div className='w-full dialog-modal sm:max-w-[253px] s:max-w-[176px]'>
			<button
				className='modal-button w-full py-2.5 rounded-md shadow-buttonShadow bg-darkBlue text-white leading-snug text-24 overflow-hidden cursor-pointer relative duration-300 ease-in-out'
				onClick={handleOpen}
				aria-label='Open contact modal'
				type='button'
			>
				Contact me
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box className='s:max-w-[440px]' sx={style}>
					<div className='flex flex-col justify-center items-center lg:gap-[69px] s:gap-[29px]'>
						<b
							className='font-normal text-blue lg:text-60 s:text-40'
							id='modal-modal-title'
						>
							Contact me
						</b>
						<ul className='w-full  flex justify-between xl:gap-5 md:max-[320px] s:max-w-[280px] s:gap-2 flex-wrap'>
							{socialMeadiaData.map(({ id, href, icon, alt }) => (
								<li key={id}>
									<a className='social-link' href={href}>
										<Image
											className='social-icon duration-300 ease-in-out'
											src={icon}
											width={48}
											height={48}
											alt={alt}
										/>
									</a>
								</li>
							))}
						</ul>
					</div>
				</Box>
			</Modal>
		</div>
	)
}
