"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductGallery({ product }: { product: any }) {
  const [activeImg, setActiveImg] = useState(product.images[0]);

  return (
    <div className="flex flex-col gap-6">
      {/* Asosiy Rasm ekrani */}
      <div className="relative aspect-[4/5] max-h-[700px] w-full overflow-hidden rounded-[2.5rem] bg-[#F9F9FB]">
        <Image
          src={activeImg}
          alt={product.name}
          fill
          className="object-contain p-12 mix-blend-multiply transition-transform duration-700 hover:scale-105"
          priority
        />
        {/* Miniatyrlar Rasm ustida (float) */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 rounded-3xl border border-white/20 bg-white/40 p-2 backdrop-blur-xl">
          {product.images.map((img: string, i: number) => (
            <button
              key={i}
              onClick={() => setActiveImg(img)}
              className={cn(
                "relative h-14 w-14 overflow-hidden rounded-2xl transition-all duration-300",
                activeImg === img
                  ? "scale-110 shadow-lg ring-2 ring-black"
                  : "opacity-60 hover:opacity-100",
              )}
            >
              <Image src={img} alt="thumb" fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
