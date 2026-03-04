import React from "react";
import AllProducts from "./_componets/all-products";
import { searchParamsProps } from "@/types";
import { getProducts } from "@/actions/user-actions";

async function Page({ searchParams }: searchParamsProps) {
  const data = await getProducts({
    searchQuery: `${searchParams.search || ""}`,
    category: `${searchParams.category || ""}`,
    filter: `${searchParams.filter || ""}`,
    page: `${searchParams.page || "1"}`,
  });
  console.log(data);
  return (
    <div className="mx-auto max-w-7xl">
      <AllProducts />
    </div>
  );
}

export default Page;
