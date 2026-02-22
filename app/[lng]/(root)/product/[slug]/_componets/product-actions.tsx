import { Heart, Share2, ShoppingBag, ShieldCheck, Truck } from "lucide-react";

export default function ProductActions({ product }: { product: any }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Sarlavha va Narx */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            Premium Collection
          </span>
          <div className="flex gap-2">
            <button className="rounded-full p-2 transition-colors hover:bg-gray-100">
              <Share2 size={20} />
            </button>
            <button className="rounded-full p-2 text-red-500 transition-colors hover:bg-red-50">
              <Heart size={20} />
            </button>
          </div>
        </div>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900">
          {product.name}
        </h1>
        <div className="flex items-baseline gap-4">
          <span className="text-3xl font-medium">${product.price}</span>
          {product.oldPrice && (
            <span className="text-lg text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>
      </div>

      {/* Variant Tanlash (Masalan: Ranglar) */}
      <div className="space-y-4">
        <p className="text-sm font-semibold italic text-gray-500">
          Color: Midnight Black
        </p>
        <div className="flex gap-3">
          {["#000", "#555", "#eee"].map((color) => (
            <button
              key={color}
              className="h-8 w-8 rounded-full border border-gray-200 p-1 transition-all hover:border-black"
            >
              <div
                className="h-full w-full rounded-full shadow-inner"
                style={{ backgroundColor: color }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Action Tugmalari */}
      <div className="flex flex-col gap-3">
        <button className="flex h-16 w-full items-center justify-center gap-3 rounded-full bg-black text-lg font-medium text-white transition-all hover:bg-neutral-800 active:scale-[0.98]">
          <ShoppingBag size={22} />
          Savatga qo&apos;shish
        </button>
        <button className="flex h-16 w-full items-center justify-center rounded-full border-2 border-black text-lg font-medium transition-all hover:bg-black hover:text-white">
          Hozir sotib olish
        </button>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 gap-4 border-t border-gray-100 pt-8">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <Truck size={20} className="text-blue-500" />
          <span>O&apos;zbekiston bo&apos;ylab 24 soatda yetkazish</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <ShieldCheck size={20} className="text-green-500" />
          <span>2 yillik rasmiy kafolat va xizmat ko&apos;rsatish</span>
        </div>
      </div>
    </div>
  );
}
