import Image from "next/image";
import React from "react";

function OrderProductCard() {
  return (
    <div className="grid grid-cols-[1.5fr_1fr_auto] rounded-lg border border-white/10 bg-white/5 p-4 text-white">
      <div className="flex items-center gap-2">
        <div className="relative size-16">
          <Image
            src={"/categories/gaz.jpg"}
            alt="salom"
            fill
            className="rounded-sm object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h1 className="font-sora text-xl font-semibold text-white">
              Samsung:
            </h1>
            <h1 className="font-sora text-xl font-semibold text-white">
              Chang yutgich
            </h1>
          </div>
          <h1 className="text-gray-300">Samsung SC 5251 RED</h1>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-sora text-xl font-semibold text-white">Narxi</h1>
        <div className="flex items-center gap-2">
          <p className="font-inter text-sm text-red-500 line-through">
            {(100000).toLocaleString()} s&apos;om
          </p>
          <p className="font-inter text-sm font-semibold text-gray-100">
            {(90000).toLocaleString()} s&apos;om
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-sora text-xl font-semibold text-white">
          <span className="text-green-500">( 3 )</span> ta buyurtma
        </h1>
        <div className="flex items-center gap-2">
          <p className="font-inter text-xl font-semibold text-gray-200">
            Jami:
          </p>
          (
          <p className="font-inter text-lg font-semibold text-green-500">
            {(370000).toLocaleString()} s&apos;om
          </p>
          )
        </div>
      </div>
    </div>
  );
}

export default OrderProductCard;
