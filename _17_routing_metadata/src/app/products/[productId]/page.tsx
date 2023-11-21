import type { Metadata, ResolvingMetadata } from "next";
import { resolve } from "path";

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  // const id = params.id;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  const productTitle: string = await new Promise((resolve) =>
    setTimeout(() => resolve(`iPhone 40 ${params.productId}`), 3000),
  );

  return {
    // title: `product ${params.productId}`, // OR
    title: productTitle,
    // openGraph: {
    // images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
    description: `description from product`,
  };
}

export default function SingleProduct({ params }: Props) {
  return <h1>Details page about product {params.productId}</h1>;
}
