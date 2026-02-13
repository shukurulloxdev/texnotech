import StatisticsCard from '@/components/cards/statistics-card'
import { bestSeller, statistics } from '@/components/constants'
import Image from 'next/image'
import React from 'react'
import BestSellerCard from './_components/cards/testseller-card'

function Page() {
	return (
		<div className='overflow-hidden'>
			<div className='space-y-10'>
				<div>
					<h1 className='text-4xl font-bold tracking-tight text-white'>
						Sayt statistikasi
					</h1>
					<p className='mt-2 text-sm text-slate-400'>
						Saytning real-vaqt nazorati paneli
					</p>
				</div>
				<div className='grid grid-cols-4 gap-5'>
					{statistics.map((card, i) => (
						<StatisticsCard key={i} card={card} />
					))}
				</div>

				<div className='grid grid-cols-3 gap-5'>
					<div
						className='p-6 flex flex-col gap-4 border border-white/20 rounded-3xl
	bg-white/10 col-span-2'
					>
						{bestSeller.map(item => (
							<BestSellerCard key={item.image} product={item} />
						))}
					</div>

					{/*  */}
					{/* <div
						className='p-6 border border-white/20 rounded-3xl
	bg-white/10'
					>
						<div className='flex flex-col gap-4'>
							<div className='p-4 bg-white/10 rounded-xl'>lorem</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default Page
