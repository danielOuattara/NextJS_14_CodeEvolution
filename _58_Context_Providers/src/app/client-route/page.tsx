"use client";

import ImageSlider from "@/components/ImageSlider";
import { useThemeContext } from "@/context/ThemeContext";

export default function ClientRoutePage() {
  console.log(`Server Route Rendered`);

  const { colors } = useThemeContext();
  console.log(colors);
  return (
    <>
      <h1>ClientRoutePage</h1>
      <ImageSlider />
      <h2
        style={{
          color: colors.primary,
          margin: "3rem 10rem",
        }}
      >
        I am styled from the context
      </h2>
    </>
  );
}
