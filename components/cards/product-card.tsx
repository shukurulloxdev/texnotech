"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { Badge } from "../ui/badge";
import { IProduct } from "@/types";
import { formatCurrentPrice } from "@/lib/utils";

interface Props {
  product: IProduct;
}

export default function ProductCard({ product }: Props) {
  if (!product) return null;
  return (
    <Card className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
      <button className="absolute right-2 top-2 z-10 rounded-full bg-white p-2 shadow hover:bg-rose-50">
        <Heart size={22} className="text-rose-500" />
      </button>
      <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
        <Badge className="bg-blue-600 text-sm shadow hover:bg-blue-700">
          Top
        </Badge>
        <Badge className="bg-red-600 text-sm shadow hover:bg-red-700">
          -{product.percent}%
        </Badge>
      </div>
      <CardContent className="p-5">
        <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-2xl bg-slate-50">
          <Image
            src={product.images[0]}
            alt="iPhone"
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <p className="mb-1 text-[13px] font-bold text-blue-500 line-through">
          {product.price.toLocaleString()} so‘m
        </p>
        <p className="mb-1 text-2xl font-bold text-pink-600">
          {formatCurrentPrice(product.price, product.percent)} so‘m
        </p>

        <h3 className="mb-1 line-clamp-2 text-[16px] font-medium text-slate-900">
          {product.name}
        </h3>

        <p className="mb-4 text-xs text-slate-400">
          Brand:{" "}
          <span className="font-semibold text-pink-600 underline">
            {product.brand}
          </span>
        </p>

        <div className="flex w-full items-center gap-2">
          <Button
            variant="secondary"
            className="h-10 w-[70%] rounded-xl bg-slate-100 text-slate-900 hover:bg-pink-600 hover:text-white"
          >
            Hozir xarid qilish
          </Button>

          <Button
            size="icon"
            className="size-10 w-[30%] rounded-xl bg-pink-600 hover:bg-pink-700"
          >
            <ShoppingBag size={22} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
