import { notFound } from "next/navigation";

type Params = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function SingleProductReview({
  params: { productId, reviewId },
}: Params) {
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      {" "}
      Product {productId} - Review {reviewId}
    </h1>
  );
}
