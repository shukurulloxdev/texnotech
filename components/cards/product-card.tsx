'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Scale, ShoppingBag } from 'lucide-react'

export default function ProductCard() {
	return (
		<Card className='group relative w-full max-w-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl'>
			<div className='absolute right-4 top-4 z-10 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100'>
				<button className='rounded-full bg-white p-2 shadow hover:bg-slate-100'>
					<Scale size={18} className='text-slate-600' />
				</button>
				<button className='rounded-full bg-white p-2 shadow hover:bg-rose-50'>
					<Heart size={18} className='text-rose-500' />
				</button>
			</div>

			<CardContent className='p-5'>
				<div className='relative mb-5 aspect-square w-full overflow-hidden rounded-2xl bg-slate-50'>
					<Image
						src='/categories/gaz.jpg'
						alt='iPhone'
						fill
						className='object-contain transition-transform duration-700 group-hover:scale-105'
					/>
				</div>

				<p className='mb-1 text-2xl font-bold text-pink-600'>18 999 000 so‘m</p>

				<h3 className='mb-1 line-clamp-2 text-sm font-medium text-slate-900'>
					IPHONE Air 1TB Cloud White
				</h3>

				<p className='mb-4 text-xs text-slate-400'>
					Brand: <span className='underline'>Iphone</span>
				</p>

				<div className='flex items-center gap-3'>
					<Button
						variant='secondary'
						className='h-11 flex-1 rounded-2xl bg-slate-100 text-slate-900 hover:bg-slate-200'
					>
						Hozir xarid qilish
					</Button>

					<Button
						size='icon'
						className='size-11 rounded-2xl bg-pink-600 hover:bg-pink-700'
					>
						<ShoppingBag size={18} />
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
