import React from "react";
import OrderCard from "../../../../components/cards/order-card";
import { Button } from "@/components/ui/button";
import { ListChecks } from "lucide-react";
import Link from "next/link";

function Page() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Barcha yangi buyurtmalar
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Bu yerda siz mijozlardan kelgan yangi buyurtmalarni qabul
            qilishingiz mumkun
          </p>
        </div>
        <Link href={"/admin/end-orders"}>
          <Button
            type="submit"
            className="h-11 bg-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-700 active:scale-95"
          >
            <ListChecks />
            Barcha tugatilgan buyurtmalar
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default Page;
