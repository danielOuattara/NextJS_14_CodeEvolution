import { notFound } from "next/navigation";

function getRandomInteger(count: number) {
  return Math.floor(Math.random() * count);
}

type Params = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function SingleProductReview({ params }: Params) {
  const randomInteger: number = getRandomInteger(3);
  console.log("randomInteger = ", randomInteger);

  if (randomInteger === 1) {
    throw new Error("Error loading review !");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      {" "}
      Product {params.productId} - Review {params.reviewId}
    </h1>
  );
}
