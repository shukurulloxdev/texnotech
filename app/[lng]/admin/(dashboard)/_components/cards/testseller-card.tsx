import { bestSellerTip } from '@/types'
import Image from 'next/image'
import React from 'react'

interface Props {
	product: bestSellerTip
}

function BestSellerCard({ product }: Props) {
	return (
		<div className='flex items-center justify-between gap-4 p-4 bg-white/10 rounded-xl'>
			<div className='flex items-center gap-4'>
				<div className='relative size-16'>
					<Image
						src={product.image}
						alt={product.brend}
						className='object-cover rounded-sm'	
						fill
					/>
				</div>
				<div className='flex flex-col'>
					<h1 className='text-xl font-sora font-semibold text-white'>
						{product.brend}: {product.category}
					</h1>
					<p className='font-inter text-sm text-gray-300 line-clamp-1'>
						{product.title}
					</p>
				</div>
			</div>

			<div className='flex flex-col'>
				<h1 className='text-xl font-sora font-semibold text-white'>
					{product.price.toLocaleString()} soʻm
				</h1>
				<p className='font-inter text-sm text-gray-300'>
					{product.soldout} ta sotuv
				</p>
			</div>
		</div>
	)
}

export default BestSellerCard
