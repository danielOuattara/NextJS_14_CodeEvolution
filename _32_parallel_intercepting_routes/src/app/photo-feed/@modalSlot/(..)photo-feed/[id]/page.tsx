import Image from "next/image";
import { wondersImages, type TypeWonderImage } from "./../../../wonder";
import Modal from "@/components/modal";

type TypeProps = {
  params: { id: string };
};

export default function PhotoModal({ params }: TypeProps) {
  const photo: TypeWonderImage = wondersImages.find(
    (photo) => photo.id === params.id,
  )!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
