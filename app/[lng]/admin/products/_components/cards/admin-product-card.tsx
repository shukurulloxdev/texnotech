"use client";

import { deleteProduct } from "@/actions/admin-actions";
import { Button } from "@/components/ui/button";
import { formatCurrentPrice } from "@/lib/utils";
import { IProduct } from "@/types";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

interface Props {
  product: IProduct;
}
function AdminProductCard({ product }: Props) {
  function removeProduct() {
    const res = deleteProduct({ id: product._id });

    toast.promise(res, {
      success: "Muvaffaqiyatli o'chirildi ✅",
      error: "Nimadur xato ❌, Boshidan uruning!",
      loading: "Iltimos kuting 👀",
    });
  }
  return (
    <div className="grid grid-cols-[1.5fr_1fr_auto] items-center rounded-xl bg-white/10 p-4">
      <div className="flex items-center gap-3">
        <div className="relative size-14">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="rounded-sm object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-sora text-xl font-semibold text-white">
            {product.brand}: {product.category}
          </h1>
          <p className="line-clamp-1 font-inter text-sm text-gray-300">
            {product.name}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-sora text-xl font-semibold text-white">Narxi</h1>
        <div className="flex items-center gap-2">
          <p className="font-inter text-sm text-gray-400 line-through">
            {product.price.toLocaleString()} so&apos;m
          </p>
          <p className="font-inter text-sm font-semibold text-gray-100">
            {formatCurrentPrice(product.price, product.percent)} so&apos;m
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          className="cursor-pointer bg-white/20 text-white"
          variant={"outline"}
        >
          Sozlash
        </Button>
        <Button
          className="cursor-pointer bg-red-600 text-white hover:bg-red-500 hover:text-white"
          variant={"outline"}
        >
          Draf
        </Button>

        <Button
          className="cursor-pointer bg-red-600 text-white hover:bg-red-700 hover:text-white"
          variant={"outline"}
          onClick={() => removeProduct()}
        >
          O&apos;chirish
        </Button>
      </div>
    </div>
  );
}

export default AdminProductCard;
