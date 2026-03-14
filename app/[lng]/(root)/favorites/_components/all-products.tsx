"use client";
import ProductCard from "@/components/cards/product-card";
import { cn } from "@/lib/utils";
import { IProduct } from "@/types";
import { ChevronRight, Home, LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AllProducts({ products }: { products: IProduct[] }) {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col gap-2">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
            <Link href={"/"} className="flex items-center gap-1">
              <Home size={15} />
              <span>Bosh sahifa</span>
            </Link>
            <ChevronRight size={10} />
            <span className="italic text-pink-600">Saralanganlar</span>
          </nav>
          <h1 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-neutral-900">
            Tanlangan{" "}
            <span className="not-italic text-pink-600">Mahsulotlar</span>
          </h1>
        </div>

        {/* SWITCHER - O'zgarishsiz qoldi */}
        <div className="relative flex items-center gap-1 rounded-2xl border border-neutral-100 bg-neutral-50/50 p-1.5 backdrop-blur-sm">
          <div
            className={cn(
              "ease-[cubic-bezier(0.34,1.56,0.64,1)] absolute h-[40px] w-[40px] rounded-xl bg-pink-600 shadow-lg transition-all duration-500",
              view === "grid" ? "translate-x-0" : "translate-x-[44px]",
            )}
          />
          <button
            onClick={() => setView("grid")}
            className={cn(
              "relative z-10 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300",
              view === "grid" ? "text-white" : "text-neutral-400",
            )}
          >
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={() => setView("list")}
            className={cn(
              "relative z-10 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300",
              view === "list" ? "text-white" : "text-neutral-400",
            )}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid gap-3 transition-all duration-500",
          view === "grid"
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
            : "grid-cols-1",
        )}
      >
        {products.map((product) => (
          <div
            key={product._id}
            className="duration-500 animate-in fade-in zoom-in-95"
          >
            <ProductCard product={product} view={view} />
          </div>
        ))}
      </div>
    </div>
  );
}
