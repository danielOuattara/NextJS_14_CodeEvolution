import { StaticImageData } from "next/image";

import photo1 from "./photos/1.png";
import photo2 from "./photos/2.png";
import photo3 from "./photos/3.png";
import photo4 from "./photos/4.png";

export type TypeWonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

export const wondersImages: TypeWonderImage[] = [
  {
    id: "1",
    name: " super photo 1",
    src: photo1,
    photographer: "Chang Yu",
    location: "China",
  },
  {
    id: "2",
    name: " super photo 2",
    src: photo2,
    photographer: "Boala",
    location: "Cameroun",
  },
  {
    id: "3",
    name: " super photo 3",
    src: photo3,
    photographer: "Degage Talon",
    location: "Benin",
  },
  {
    id: "4",
    name: " super photo 4",
    src: photo4,
    photographer: "Maquis Propos",
    location: "Senegal",
  },
];
