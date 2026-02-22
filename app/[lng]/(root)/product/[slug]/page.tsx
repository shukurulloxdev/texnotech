import { getProductById } from "@/actions/user-actions";
import ProductActions from "./_componets/product-actions";
import ProductAbout from "./_componets/product-about";
import ProductGallery from "./_componets/product-gallery";

async function Page({ params }: { params: { slug: string } }) {
  const { data } = await getProductById({ id: params.slug });

  if (!data?.product)
    return <div className="py-20 text-center">Mahsulot topilmadi</div>;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-12">
        {/* Yuqori qism: Galereya va Actionlar bir blokda */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Chap: Galereya (Sticky bo'ladi, pastga tushganda ham turadi) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <ProductGallery product={data.product} />
          </div>

          {/* O'ng: Actions (Sotib olish va boshqaruv) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-24 space-y-8">
              <ProductActions product={data.product} />
            </div>
          </div>
        </div>

        {/* Pastki qism: To'liq ma'lumot (Katta va keng formatda) */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <ProductAbout product={data.product} />
        </div>
      </div>
    </div>
  );
}

export default Page;
