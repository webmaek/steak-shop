import Image from "next/image";

const partners = [
  {
    id: 1,
    src: "/logo1.png",
    alt: "",
  },
  {
    id: 2,
    src: "/logo2.png",
    alt: "",
  },
  {
    id: 3,
    src: "/logo3.png",
    alt: "",
  },
  {
    id: 4,
    src: "/logo4.png",
    alt: "",
  },
  {
    id: 5,
    src: "/logo5.png",
    alt: "",
  },
];

export function Partners() {
  return (
    <section className="pb-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-5xl font-brand text-gray-800">
          In associasion with
        </h3>
        <p className="mt-6 font-light text-sm text-gray-600 w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="flex justify-center items-center mt-10">
        {partners.map((partner) => (
          <div key={partner.id} className="mx-10 w-24 h-12 relative">
            <Image src={partner.src} alt={partner.alt} layout="fill" />
          </div>
        ))}
      </div>
    </section>
  );
}
