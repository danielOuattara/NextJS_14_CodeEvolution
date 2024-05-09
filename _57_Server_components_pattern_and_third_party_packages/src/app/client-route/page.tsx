"use client";

// import { serverSideFunction } from "@/utils/server-utils";
// export default function ClientRoutePage() {
//   console.log(`Server Route Rendered`);

//   const result = serverSideFunction();
//   return (
//     <>
//       <h1>ClientRoutePage</h1>
//       <p>{result}</p>
//     </>
//   );
// }

//---------------------------------------------------

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ClientRoutePage() {
//   console.log(`Server Route Rendered`);

//   const settings = {
//     dots: true,
//   };
//   return (
//     <div className="image-slider-container">
//       <Slider {...settings}>
//         <div>
//           <img src="http://placekitten.com/g/400/200" />
//         </div>
//         <div>
//           <img src="http://placekitten.com/g/400/200" />
//         </div>
//         <div>
//           <img src="http://placekitten.com/g/400/200" />
//         </div>
//         <div>
//           <img src="http://placekitten.com/g/400/200" />
//         </div>
//       </Slider>
//     </div>
//   );
// }

//---------------------------------------------------

"use client";

import ImageSlider from "@/components/ImageSlider";

export default function ClientRoutePage() {
  console.log(`Server Route Rendered`);

  return (
    <>
      <h1>ClientRoutePage</h1>
      <ImageSlider />
    </>
  );
}
