import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, Hash } from "lucide-react";
import OrderProductCard from "./order-product-card";

function OrderCard() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl transition-all duration-300">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Shukurulloh
          </h2>
          <p className="text-sm text-gray-400">+998 (90) 201-58-58</p>
        </div>

        <Button
          variant="outline"
          className="border-white/30 bg-emerald-400 transition-all duration-300 hover:scale-105 hover:border-red-200 hover:bg-emerald-500 active:scale-95"
        >
          Yakunlash
        </Button>
      </div>

      <Separator className="my-5 bg-white/15" />

      {/* Info Grid */}
      <div className="grid grid-cols-4 gap-8">
        <InfoItem
          icon={<MapPin size={18} />}
          label="Viloyat"
          value="Farg‘ona"
        />

        <InfoItem icon={<MapPin size={18} />} label="Hudud" value="Marg‘ilon" />

        <InfoItem
          icon={<Hash size={18} />}
          label="Buyurtma indeksi"
          value="1132"
        />

        <InfoItem
          icon={<CalendarDays size={18} />}
          label="Buyurtma sanasi"
          value="29 Sep 2025, 14:06"
        />
      </div>

      <Separator className="my-5 bg-white/15" />
      <div className="flex flex-col gap-3">
        <OrderProductCard />
        <OrderProductCard />
      </div>

      <Separator className="my-5 bg-white/15" />
      <div className="flex items-center justify-between">
        <h1 className="font-inter text-xl font-semibold text-white">
          Jammi hisob:
        </h1>
        <h1 className="font-sora text-xl font-semibold text-pink-200">
          {(1900000).toLocaleString()} so&apos;m
        </h1>
      </div>

      <Separator className="my-2 bg-white/15" />
    </div>
  );
}

export default OrderCard;

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-gray-400">{icon}</div>
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-widest text-gray-400">
          {label}
        </span>
        <span className="text-base font-medium text-white">{value}</span>
      </div>
    </div>
  );
}
