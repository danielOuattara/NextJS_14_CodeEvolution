import { serverSideFunction } from "@/utils/server-utils";
import ImageSlider from "@/components/ImageSlider";

export default function ServerRoutePage() {
  console.log(`Server Route Rendered`);

  const result = serverSideFunction();
  return (
    <>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
}
