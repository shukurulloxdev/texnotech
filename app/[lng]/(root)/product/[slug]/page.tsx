import { getProductById } from "@/actions/user-actions";
import ProductActions from "./_componets/product-actions";
import ProductGallery from "./_componets/product-gallery";
import PathLink from "@/components/shared/path-link";

async function Page({ params }: { params: { slug: string } }) {
  const { data } = await getProductById({ id: params.slug });

  if (!data?.product)
    return <div className="py-20 text-center">Mahsulot topilmadi</div>;

  return (
    <div className="relative mx-auto max-w-7xl py-8">
      <PathLink productName={data.product.name} />
      <div className="grid grid-cols-8 gap-8">
        <div className="col-span-5">
          <ProductGallery product={data.product} />
        </div>

        <div className="col-span-3">
          <div className="sticky top-36 space-y-8">
            <ProductActions product={data.product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
