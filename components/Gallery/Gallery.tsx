import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/food5.jpeg",
    alt: "Hamburger",
  },
  {
    id: 2,
    src: "/food6.jpeg",
    alt: "Egg Sandwich",
  },
  {
    id: 3,
    src: "/food7.jpeg",
    alt: "Fish Dish",
  },
  {
    id: 4,
    src: "/food8.jpeg",
    alt: "Salmon with salad",
  },
];

export function Gallery() {
  return (
    <section className="w-full h-[500px] my-20 grid grid-cols-4">
      {images.map((image) => (
        <div key={image.id} className="col-span-1 relative">
          <Image src={image.src} alt={image.alt} layout="fill" />
        </div>
      ))}
    </section>
  );
}
