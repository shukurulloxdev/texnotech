"use server";

import { actionClient } from "@/lib/safe-action";
import { addProductSchema } from "@/lib/validation";
import { ProductType } from "@/types";

export const createProduct = actionClient
  .schema(addProductSchema)
  .action<ProductType>(async ({ parsedInput }) => {
    const response = await fetch(
      // response hardoyim res obyectini qaytaradi malumotni emas malumotni olish uchun
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
    const data = await response.json(); // shunday qilish kerak yani javobni ochib olamiz yani kutib olamiz response obyectidagi javobni js obyectga aylantiramiz
    return data;
  });

export const getTopProducts = actionClient.action<ProductType[]>(async () => {
  const res = await fetch("http://localhost:8080/api/admin/top-products");

  if (!res.ok) throw new Error("Server error");

  const data = await res.json(); // ✅ JSONni ochib arrayga aylantiramiz
  return data;
});
