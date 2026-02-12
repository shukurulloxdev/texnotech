import React from 'react'

function SearchTabel() {
	const items = [
		'Samsung televizorlari',
		'Alisa bilan kolonka',
		'Kenwood elektr choynaklari',
		'Philips elektr choynaklari',
		'Tefal elektr choynaklari',
		'Shivaki elektr choynaklari',
		'Apple iPhone smartfonlari',
	]
	return (
		<div className='mt-6 bg-white py-10'>
			<div className='mx-auto max-w-7xl'>
				<div className='mx-auto mb-10  text-center'>
					<span className=' inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-medium tracking-wide text-pink-500'>
						Real savollarga javoblar
					</span>
					<h2 className='mt-3 font-inter text-5xl font-semibold text-gray-800'>
						<span className='bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent'>
							Barcha toifalar va brendlar
						</span>
					</h2>
				</div>
				<div className='grid grid-cols-3 gap-4'>
					<div
						className=' w-full rounded-2xl border bg-gradient-to-b
from-white
via-pink-50
to-blue-50 p-6 shadow-xl'
					>
						<h2 className='mb-4 text-xl font-semibold text-gray-800'>
							Odamlar ko‘pincha qidirishadi
						</h2>

						<ul className='divide-y divide-gray-300'>
							{items.map((item, index) => (
								<li
									key={index}
									className='cursor-pointer py-3 text-gray-700 transition hover:text-black'
								>
									{item}
								</li>
							))}
						</ul>
					</div>
					<div
						className='w-full
rounded-2xl
border
bg-gradient-to-b

 from-white via-pink-50 to-blue-50 p-6 shadow-xl'
					>
						<h2 className='mb-4 text-xl font-semibold text-gray-800'>
							Odamlar ko‘pincha qidirishadi
						</h2>

						<ul className='divide-y divide-gray-300'>
							{items.map((item, index) => (
								<li
									key={index}
									className='cursor-pointer py-3 text-gray-700 transition hover:text-black'
								>
									{item}
								</li>
							))}
						</ul>
					</div>
					<div
						className='w-full
rounded-2xl
border
bg-gradient-to-b

 from-white via-pink-50 to-blue-50 p-6 shadow-xl'
					>
						<h2 className='mb-4 text-xl font-semibold text-gray-800'>
							Odamlar ko‘pincha qidirishadi
						</h2>

						<ul className='divide-y divide-gray-300'>
							{items.map((item, index) => (
								<li
									key={index}
									className='cursor-pointer py-3 text-gray-700 transition hover:text-black'
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchTabel
