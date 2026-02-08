'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { lngs } from '@/components/constants'
import Link from 'next/link'

export default function LngMenu() {
	const { lng } = useParams()

	const currentLng = lng as string

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='link' className='flex items-center gap-2 '>
					<Image
						src={`/locales/${currentLng}.png`}
						alt={currentLng}
						width={22}
						height={22}
						className='rounded-full'
					/>
					<span className='text-sm font-medium uppercase tracking-wide'>
						{currentLng}
					</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align='end'
				className='mt-2 min-w-[140px] rounded-2xl border border-gray-200 bg-white p-2 shadow-xl'
			>
				{lngs
					.filter(item => item.route !== currentLng)
					.map(item => (
						<Link key={item.route} href={item.route}>
							<DropdownMenuItem className='flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-gray-100'>
								<Image
									src={`/locales/${item.route}.png`}
									alt={item.label}
									width={24}
									height={24}
									className='rounded-full'
								/>
								<span className='text-sm font-medium'>{item.label}</span>
							</DropdownMenuItem>
						</Link>
					))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
