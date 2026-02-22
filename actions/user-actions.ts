"use server";

import { actionClient } from "@/lib/safe-action";
import { idSchema } from "@/lib/validation";
import { ReturnActionType } from "@/types";

export const getTopProducts = actionClient.action<ReturnActionType>(
  async () => {
    const res = await fetch("http://localhost:8080/api/user/top-products", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json(); // ✅ JSONni ochib arrayga aylantiramiz

    return data;
  },
);

export const getProductById = actionClient
  .schema(idSchema)
  .action<ReturnActionType>(async ({ parsedInput }) => {
    const res = await fetch(
      `http://localhost:8080/api/user/product/${parsedInput.id}`,
    );

    const data = await res.json();

    return data;
  });
