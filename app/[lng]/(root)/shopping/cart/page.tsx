import React from "react";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getTopProducts } from "@/actions/user-actions";
import BasketSummary from "./_componets/basket-summary";
import AllBasketProducts from "./_componets/all-basket-products";

async function Page() {
  const topProducts = await getTopProducts();
  const products = topProducts.data?.products || [];
  const totalCount = products?.length || 0;

  return (
    <div className="mx-auto min-h-screen max-w-7xl py-6">
      {totalCount > 0 ? (
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex-1">
            <AllBasketProducts products={products} />
          </div>

          <aside className="w-full lg:w-96">
            <div className="sticky top-36">
              <BasketSummary products={products} />
            </div>
          </aside>
        </div>
      ) : (
        <div className="rounded-[3rem] border-2 border-dashed border-neutral-100 bg-neutral-50/50 py-24 text-center">
          <div className="mx-auto mb-6 w-fit rounded-full bg-white p-8 shadow-sm">
            <ShoppingBag
              size={48}
              className="text-neutral-200"
              strokeWidth={1}
            />
          </div>
          <h2 className="text-2xl font-black uppercase italic tracking-tight text-neutral-900">
            Savat bo'sh
          </h2>
          <Link
            href="/"
            className="mt-6 inline-flex h-14 items-center rounded-2xl bg-neutral-900 px-10 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-pink-600"
          >
            Xaridni boshlash
          </Link>
        </div>
      )}
    </div>
  );
}

export default Page;
