// 'use client'

// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { Button } from '@/components/ui/button'
// import { useParams } from 'next/navigation'
// import Image from 'next/image'
// import { lngs } from '@/components/constants'
// import Link from 'next/link'

// export default function LngMenu() {
// 	const { lng } = useParams()

// 	const currentLng = lng as string

// 	return (
// 		<DropdownMenu>
// 			<DropdownMenuTrigger asChild>
// 				<Button variant='link' className='flex items-center gap-2 '>
// 					<Image
// 						src={`/locales/${currentLng}.png`}
// 						alt={currentLng}
// 						width={22}
// 						height={22}
// 						className='rounded-full'
// 					/>
// 					<span className='text-sm font-medium uppercase tracking-wide'>
// 						{currentLng}
// 					</span>
// 				</Button>
// 			</DropdownMenuTrigger>

// 			<DropdownMenuContent
// 				align='end'
// 				className='mt-2 min-w-[140px] rounded-2xl border border-gray-200 bg-white p-2 shadow-xl'
// 			>
// 				{lngs
// 					.filter(item => item.route !== currentLng)
// 					.map(item => (
// 						<Link key={item.route} href={item.route}>
// 							<DropdownMenuItem className='flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-gray-100'>
// 								<Image
// 									src={`/locales/${item.route}.png`}
// 									alt={item.label}
// 									width={24}
// 									height={24}
// 									className='rounded-full'
// 								/>
// 								<span className='text-sm font-medium'>{item.label}</span>
// 							</DropdownMenuItem>
// 						</Link>
// 					))}
// 			</DropdownMenuContent>
// 		</DropdownMenu>
// 	)
// }
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import { lngs } from "@/components/constants";
import Link from "next/link";
import { ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LngMenu() {
  const { lng } = useParams();
  const pathname = usePathname();
  const currentLng = lng as string;

  // joriy til ob'ektini topish
  const activeLng = lngs.find((item) => item.route === currentLng) || lngs[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group flex items-center gap-2.5 rounded-xl bg-neutral-50 px-3 py-2 transition-all hover:bg-pink-50 hover:ring-1 hover:ring-pink-100 active:scale-95">
          <div className="relative h-5 w-5 overflow-hidden rounded-full ring-1 ring-neutral-200">
            <Image
              src={`/locales/${currentLng}.png`}
              alt={currentLng}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-[11px] font-black uppercase tracking-widest text-neutral-600 group-hover:text-pink-600">
            {currentLng}
          </span>
          <ChevronDown
            size={12}
            className="text-neutral-400 transition-transform group-hover:rotate-180 group-hover:text-pink-600"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="min-w-[150px] overflow-hidden rounded-[1.5rem] border border-neutral-100 bg-white/80 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl animate-in fade-in zoom-in-95"
      >
        <div className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
          Tilni tanlang
        </div>
        {lngs.map((item) => {
          const isActive = item.route === currentLng;
          return (
            <Link
              key={item.route}
              href={`/${item.route}/${pathname.split("/").slice(2).join("/")}`}
            >
              <DropdownMenuItem
                className={cn(
                  "flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 outline-none transition-all",
                  isActive ? "bg-pink-50 text-pink-600" : "hover:bg-neutral-50",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-6 w-6 overflow-hidden rounded-full shadow-sm">
                    <Image
                      src={`/locales/${item.route}.png`}
                      alt={item.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold tracking-tight">
                    {item.label}
                  </span>
                </div>
                {isActive && (
                  <div className="h-1.5 w-1.5 rounded-full bg-pink-600" />
                )}
              </DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
