import { getProductById } from "@/actions/user-actions";

async function Page({ params }: { params: { slug: string } }) {
  const data = await getProductById({ id: params.slug });

  return <div>{data.data?.product.description}</div>;
}

export default Page;
git add .
GIT_AUTHOR_DATE="2026-01-24T12:00:00" \
GIT_COMMITTER_DATE="2026-02-24T12:00:00" \
git commit -m "Admin updated"
git push