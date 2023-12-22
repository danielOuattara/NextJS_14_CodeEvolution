// type PropsType = {
//   params: {
//     productId: string;
//   };
//   searchParams: string;
// };

// export default function SingleProduct(props: PropsType) {
//   return <p>Details page about product {props.params.productId}</p>;
// }

//---------------------------------- OR --

type ParamsType = {
  params: {
    productId: string;
  };
};

export default function SingleProduct({ params: { productId } }: ParamsType) {
  return <p>Details page about product {productId}</p>;
}
