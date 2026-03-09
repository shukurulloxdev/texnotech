// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useParams, usePathname } from "next/navigation";
// import {
//   Heart,
//   ShoppingBag,
//   User,
//   Search,
//   LayoutGrid,
//   Bell,
//   ChevronDown,
//   Sparkles,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import Logo from "@/components/shared/logo";
// import { useTranslation } from "@/i18n/client";
// import LngMenu from "@/components/shared/lng-menu";

// function Navbar() {
//   const { lng } = useParams();
//   const { t } = useTranslation(lng as string, "home");
//   const pathname = usePathname();
//   const [isSearchFocused, setIsSearchFocused] = useState(false);

//   return (
//     <div className="sticky top-0 z-[100] border-b border-neutral-100 bg-white shadow-xl backdrop-blur-2xl">
//       <div className="mx-auto max-w-7xl py-3">
//         <div className="flex items-center justify-between gap-10">
//           {/* Logo & Catalog */}
//           <div className="flex items-center gap-8">
//             <Logo />
//             <button className="group hidden items-center gap-3 rounded-2xl bg-pink-600 px-6 py-3 text-white shadow-[0_10px_25px_-5px_rgba(219,39,119,0.4)] transition-all hover:bg-pink-700 active:scale-95 xl:flex">
//               <LayoutGrid
//                 size={20}
//                 className="transition-transform duration-500 group-hover:rotate-90"
//               />
//               <span className="text-sm font-black uppercase tracking-wider">
//                 Katalog
//               </span>
//             </button>
//           </div>

//           {/* Smart Search Architecture */}
//           <div
//             className={cn(
//               "relative max-w-2xl flex-1 transition-all duration-500",
//               isSearchFocused ? "scale-[1.02]" : "",
//             )}
//           >
//             <div className="relative flex items-center">
//               <input
//                 onFocus={() => setIsSearchFocused(true)}
//                 onBlur={() => setIsSearchFocused(false)}
//                 type="text"
//                 placeholder="Smart qidiruv: iPhone 15 Pro..."
//                 className="h-14 w-full rounded-[1.25rem] border-2 border-transparent bg-neutral-100 pl-14 pr-32 text-sm font-bold transition-all focus:border-pink-200 focus:bg-white"
//               />
//               <Search className="absolute left-5 text-neutral-400" size={22} />

//               {/* Search Quick Actions */}
//               <div className="absolute right-3 flex items-center gap-2">
//                 <button className="rounded-xl bg-neutral-900 px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-pink-600">
//                   Qidirish
//                 </button>
//               </div>
//             </div>

//             {/* Search Suggestions Dropdown (Only on Focus) */}
//             {isSearchFocused && (
//               <div className="absolute left-0 top-[110%] w-full rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-2xl animate-in fade-in slide-in-from-top-2">
//                 <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
//                   <Sparkles size={14} className="text-pink-500" />
//                   Ommabop qidiruvlar
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "AirPods Pro",
//                     "Samsung S24",
//                     "Gaming Laptop",
//                     "Nike Air",
//                   ].map((tag) => (
//                     <span
//                       key={tag}
//                       className="cursor-pointer rounded-full border border-neutral-100 bg-neutral-50 px-4 py-2 text-xs font-bold transition-all hover:bg-pink-50 hover:text-pink-600"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Action Center - User Interface */}
//           <div className="flex items-center gap-3">
//             {/* Notifications */}
//             <button className="relative rounded-2xl bg-neutral-50 p-3.5 text-neutral-700 transition-all hover:bg-pink-50 hover:text-pink-600">
//               <Bell size={24} strokeWidth={2.3} />
//               <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full border-2 border-white bg-pink-600" />
//             </button>

//             {/* Wishlist */}
//             <button className="group relative rounded-2xl bg-neutral-50 p-3.5 text-neutral-700 transition-all hover:bg-pink-50 hover:text-pink-600">
//               <Heart
//                 size={24}
//                 strokeWidth={2.3}
//                 className="group-hover:fill-pink-600"
//               />
//               <div className="absolute -right-2 -top-2 rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-black text-white ring-4 ring-white">
//                 12
//               </div>
//             </button>

//             {/* Cart Hub */}
//             <button className="group flex items-center gap-4 rounded-2xl border border-transparent bg-neutral-50 p-1.5 pr-6 transition-all hover:border-pink-100 hover:bg-pink-50">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm transition-all group-hover:bg-pink-600 group-hover:text-white">
//                 <ShoppingBag size={22} />
//               </div>
//               <div className="flex flex-col items-start">
//                 <span className="text-[10px] font-black uppercase tracking-tighter text-neutral-400">
//                   Savatda
//                 </span>
//                 <span className="text-sm font-black text-neutral-900">
//                   12.500.000 UZS
//                 </span>
//               </div>
//             </button>

//             {/* User Dashboard Container */}
//             <div className="ml-2 border-l border-neutral-100 pl-6">
//               <button className="group flex items-center gap-3">
//                 <div className="relative h-12 w-12 overflow-hidden rounded-2xl ring-2 ring-transparent transition-all group-hover:ring-pink-600">
//                   <div className="absolute inset-0 flex items-center justify-center bg-pink-100 text-pink-600">
//                     <User size={24} />
//                   </div>
//                 </div>
//                 <div className="hidden flex-col items-start xl:flex">
//                   <span className="text-[11px] font-black uppercase text-pink-600">
//                     Xush kelibsiz
//                   </span>
//                   <div className="flex items-center gap-1">
//                     <span className="text-[13px] font-black uppercase text-neutral-900">
//                       Profilim
//                     </span>
//                     <ChevronDown
//                       size={14}
//                       className="text-neutral-400 transition-transform group-hover:rotate-180"
//                     />
//                   </div>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 3. Sub-Navigation (Categories & Trends) */}
//       <div className="border-t border-neutral-100 bg-white/50 py-3 backdrop-blur-sm">
//         <div className="mx-auto flex max-w-7xl">
//           <nav className="flex w-full items-center justify-between gap-2">
//             {[
//               "Yangi kelganlar",
//               "Smartfonlar",
//               "Noutbuklar",
//               "Planshetlar",
//               "Aksessuarlar",
//               "Televizorlar",
//               "Maishiy texnikalar",
//             ].map((cat, index, array) => (
//               <React.Fragment key={cat}>
//                 <Link
//                   href="#"
//                   className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.15em] text-neutral-500 transition-all hover:text-pink-600"
//                 >
//                   <div className="relative flex h-2 w-2 items-center justify-center">
//                     <div className="h-1.5 w-1.5 rounded-full bg-pink-100 transition-all duration-300 group-hover:h-2 group-hover:w-2 group-hover:bg-pink-600 group-hover:shadow-[0_0_10px_rgba(219,39,119,0.5)]" />
//                   </div>

//                   <span className="whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1">
//                     {cat}
//                   </span>
//                 </Link>

//                 {/* Separator - Oxirgi elementdan keyin chiqmaydi */}
//                 {index !== array.length - 1 && (
//                   <div className="mx-1 h-4 w-[1px] bg-neutral-100" />
//                 )}
//               </React.Fragment>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
// ... Navbar kodi ichida (Action Center qismida)

<div className="flex items-center gap-3">
  {/* Bildirishnomalar */}
  <button className="relative rounded-2xl bg-neutral-50 p-3.5 text-neutral-700 transition-all hover:bg-pink-50 hover:text-pink-600">
    <Bell size={24} strokeWidth={2.3} />
    <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full border-2 border-white bg-pink-600" />
  </button>

  {/* Sevimlilar */}
  <button className="group relative rounded-2xl bg-neutral-50 p-3.5 text-neutral-700 transition-all hover:bg-pink-50 hover:text-pink-600">
    <Heart size={24} strokeWidth={2.3} className="group-hover:fill-pink-600" />
    <div className="absolute -right-2 -top-2 rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-black text-white ring-4 ring-white">
      12
    </div>
  </button>

  {/* LngMenu - Yangi Joylashuv: Savatdan oldin nafis turadi */}
  <div className="mx-1 border-x border-neutral-100 px-2">
    <LngMenu />
  </div>

  {/* Savat Hub */}
  <button className="group flex items-center gap-4 rounded-2xl border border-transparent bg-neutral-50 p-1.5 pr-6 transition-all hover:border-pink-100 hover:bg-pink-50">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm transition-all group-hover:bg-pink-600 group-hover:text-white">
      <ShoppingBag size={22} />
    </div>
    <div className="flex flex-col items-start leading-tight">
      <span className="text-[10px] font-black uppercase tracking-tighter text-neutral-400">
        Savatda
      </span>
      <span className="text-[13px] font-black text-neutral-900">
        12.500.000 UZS
      </span>
    </div>
  </button>

  {/* User Dashboard */}
  <div className="ml-2 border-l border-neutral-100 pl-4">
    <button className="group flex items-center gap-3">
      {/* ... Profil kodi ... */}
    </button>
  </div>
</div>;
