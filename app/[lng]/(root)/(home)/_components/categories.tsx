// 'use client'
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// } from '@/components/ui/carousel'
// import { categories } from '@/components/constants'
// import { Separator } from '@/components/ui/separator'
// import Image from 'next/image'
// import React from 'react'
// import Autoplay from 'embla-carousel-autoplay'
// import { MoveRight } from 'lucide-react'

// function Categories() {
// 	return (
// 		<section className='mx-auto max-w-7xl py-4'>
// 			<div className='flex items-end justify-between'>
// 				<h1 className='font-sora text-3xl font-semibold tracking-tight text-slate-900'>
// 					Mahsulot toifalari
// 				</h1>
// 				<div className='group flex cursor-pointer items-center gap-1'>
// 					<span className='text-[18px] text-pink-600 transition-colors duration-300'>
// 						Hammasini ko&apos;rish
// 					</span>

// 					<MoveRight
// 						size={20}
// 						className='
// 			text-pink-600
// 			transition-transform
// 			duration-300
// 			ease-out
// 			group-hover:translate-x-1
// 		'
// 					/>
// 				</div>
// 			</div>
// 			<Carousel
// 				opts={{ align: 'start', loop: true }}
// 				plugins={[
// 					Autoplay({
// 						delay: 2000,
// 					}),
// 				]}
// 			>
// 				<CarouselContent className='py-4'>
// 					{categories.map(item => (
// 						<CarouselItem className='basis-1/6 select-none' key={item.route}>
// 							<div className='group relative cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg'>
// 								<div className='relative aspect-square w-full overflow-hidden'>
// 									<Image
// 										src={item.url}
// 										alt={item.title}
// 										fill
// 										className='object-cover transition-transform duration-700 group-hover:scale-105'
// 									/>

// 									<div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
// 								</div>
// 								<Separator />

// 								<div className='p-4 text-center group-hover:bg-gray-100'>
// 									<h3 className='font-poppins text-sm font-semibold text-slate-800 transition-opacity duration-300 '>
// 										{item.title}
// 									</h3>
// 								</div>
// 							</div>
// 						</CarouselItem>
// 					))}
// 				</CarouselContent>
// 			</Carousel>
// 		</section>
// 	)
// }

// export default Categories
"use client";

import React from "react";
import Image from "next/image";
import { MoveRight, ArrowUpRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { categories } from "@/components/constants";

function Categories() {
  return (
    <section className="mx-auto mt-4 max-w-7xl pb-6">
      <div className="mb-4 flex items-end justify-between">
        <h1 className="font-sora text-3xl font-semibold tracking-tight text-gray-800">
          Barcha toifalar
        </h1>
        <div className="group flex cursor-pointer items-center gap-1">
          <span className="text-[18px] text-pink-600 transition-colors duration-300">
            Hammasini ko&apos;rish
          </span>

          <MoveRight
            size={20}
            className="text-pink-600 transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </div>
      </div>

      {/* Carousel Section: Borderless & High-End */}
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4 px-1 py-4">
          {categories.map((item, index) => (
            <CarouselItem
              key={item.route}
              className="basis-1/2 pl-4 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <div className="group relative flex cursor-pointer flex-col items-center">
                <div className="ease-[cubic-bezier(0.23,1,0.32,1)] relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-[#F5F5F7] transition-all duration-700 group-hover:rounded-full group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                  <div className='pointer-events-none absolute inset-0 z-10 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-[0.03]' />

                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    className="rounded-[2.5rem] object-cover p-8 transition-transform duration-700 group-hover:scale-110 group-hover:rounded-full"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="translate-y-4 scale-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-pink-600 shadow-xl">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="font-sora text-[15px] font-bold tracking-tight text-neutral-400 transition-colors group-hover:text-black">
                    {item.title}
                  </h3>
                  <div className="mx-auto mt-2 h-1 w-0 rounded-full bg-black transition-all duration-500 group-hover:w-full" />
                </div>

                <span className="absolute -right-2 -top-4 select-none text-[60px] font-black text-pink-500/15 transition-opacity group-hover:opacity-10">
                  0{index + 1}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default Categories;
