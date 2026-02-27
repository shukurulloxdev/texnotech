"use server";

import { actionClient } from "@/lib/safe-action";
import { addProductSchema } from "@/lib/validation";
import { ProductType } from "@/types";

export const createProduct = actionClient
  .schema(addProductSchema)
  .action<ProductType>(async ({ parsedInput }) => {
    const response = await fetch(
      "http://localhost:8080/api/admin/add-product",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsedInput,
          price: parseFloat(parsedInput.price),
          percent: parsedInput.percent ? parseFloat(parsedInput.percent) : 0,
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();
    return data;
  });
