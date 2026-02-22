export default function ProductAbout({ product }: { product: any }) {
  return (
    <div className="mx-auto max-w-4xl space-y-16 pb-20">
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold">Mahsulot tavsifi</h2>
        <p className="text-xl font-light italic leading-relaxed text-gray-600">
          {product.description ||
            "Ushbu mahsulot eng so'nggi texnologiyalar asosida, foydalanuvchi qulayligi uchun maxsus ishlab chiqilgan. Har bir detalga e'tibor qaratilgan."}
        </p>
      </section>

      <div className="grid grid-cols-1 gap-12 border-t border-gray-100 pt-16 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Texnik xususiyatlar</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex justify-between border-b pb-2 text-sm">
              <span>Material</span> <span>Eco-friendly Polymer</span>
            </li>
            <li className="flex justify-between border-b pb-2 text-sm">
              <span>Og&apos;irligi</span> <span>1.2 kg</span>
            </li>
            <li className="flex justify-between border-b pb-2 text-sm">
              <span>Brend</span> <span>Apple Inc.</span>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Afzalliklari</h3>
          <p className="text-sm italic leading-6 text-gray-500">
            Bizning mahsulotlarimiz nafaqat sifatli, balki zamonaviy hayot
            tarzingizga mos keladigan tarzda dizayn qilingan. Suvga chidamlilik
            va uzoq muddatli xizmat kafolatlangan.
          </p>
        </div>
      </div>
    </div>
  );
}
