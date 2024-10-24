import { wondersImages, type TypeWonderImage } from "./../wonder";
import Image from "next/image";

type TypeProps = {
  params: { id: string };
};

export default function SinglePhotoPage({ params }: TypeProps) {
  const photo = wondersImages.find(
    (photo) => photo.id === params.id,
  ) as TypeWonderImage;

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />
        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
