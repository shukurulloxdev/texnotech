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
    // <div className="pb-24 font-sans">
    //   <div className="mx-auto max-w-7xl pt-6">

    //     <div className="flex flex-row gap-4">
    //       <AllProducts products={topProducts.data?.products || []} />
    //       <div className="sticky top-36 w-[320px] shrink-0 self-start">
    //         <FavoriteFidebar products={topProducts.data?.products || []} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Page;
