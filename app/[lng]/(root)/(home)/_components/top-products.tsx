import ProductCard from '@/components/cards/product-card'
import React from 'react'

function PopProducts() {
	return (
		<section className='mx-auto max-w-7xl py-8'>
			<div className=' flex items-end justify-between'>
				<h1 className='font-sora text-3xl font-semibold tracking-tight text-slate-900'>
					Top texnikalar
				</h1>
				<span className='cursor-pointer text-xl text-blue-700 underline'>
					Barchasi
				</span>
			</div>
			<div className='py-8'>
				<div className='grid grid-cols-4 gap-4'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</section>
	)
}

export default PopProducts
