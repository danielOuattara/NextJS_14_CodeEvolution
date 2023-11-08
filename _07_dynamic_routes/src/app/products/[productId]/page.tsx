type Params = {
  params: {
    productId: string;
  };
};

export default function SingleProduct({ params: { productId } }: Params) {
  return <p>Details page about product {productId}</p>;
}
