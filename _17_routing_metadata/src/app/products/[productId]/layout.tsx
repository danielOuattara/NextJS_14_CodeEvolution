/* 
NOTE: generateMetadata() can run sync OR async

*/

//---------------------------------------------------------------
import type { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  /* read route params */
  // const id = params.id;

  /* fetch data */
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());

  /* optionally access and extend (rather than replace) parent metadata */
  // const previousImages = (await parent).openGraph?.images || [];

  const productTitle: string = await new Promise((resolve) =>
    setTimeout(() => resolve(`iPhone ${params.productId}`), 3000),
  );

  return {
    // title: `product ${params.productId}`, // OR
    title: productTitle,
    // openGraph: {
    // images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
    description: `description for product ${params.productId}`,
  };
}

//---------------------------------------------------------------

type LayoutPropsType = {
  children: React.ReactNode;
  params: string;
};

export default function SingleProductLayout({
  children,
  params,
}: LayoutPropsType) {
  return (
    <article style={singleProduct}>
      <h2>Single product page</h2>
      {children}

      {/* Carousel here */}
    </article>
  );
}

const singleProduct: React.CSSProperties = {
  backgroundColor: "orange",
  padding: "10px",
  textAlign: "center",
};
