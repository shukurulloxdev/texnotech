import React from "react";
import { getTopProducts } from "@/actions/user-actions";
import AllProducts from "./_components/all-products";
import FavoriteFidebar from "./_components/favorite-sidebar";

async function Page() {
  const topProducts = await getTopProducts();

  return (
    <main className="mx-auto max-w-7xl py-6">
      <div className="flex gap-4">
        <div className="flex-1">
          <AllProducts products={topProducts.data?.products || []} />
        </div>
        <aside className="w-80">
          <div className="sticky top-36 space-y-6">
            <FavoriteFidebar products={topProducts.data?.products || []} />
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Page;
