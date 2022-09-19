import Image from "next/image";
import { AboutCard } from "./AboutCard";

export function About() {
  return (
    <section className="py-20 space-y-12">
      <AboutCard
        primaryImageUrl="/food1.jpeg"
        primaryImageAlt="Coffee"
        secondaryImageUrl="/food2.png"
        secondaryImageAlt="Food"
      />
      <AboutCard
        reversed
        primaryImageUrl="/food3.jpeg"
        primaryImageAlt="Food"
        secondaryImageUrl="/food4.png"
        secondaryImageAlt="Food"
      >
        <div className="flex items-center">
          <div className="relative h-8 w-8 mr-4">
            <Image
              className="inline-block rounded-full"
              src="/about-author.png"
              alt=""
              layout="fill"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-sm font-brand font-semibold text-gray-800">
              Marvel Maison
            </span>
            <span className="font-light text-xs text-gray-600 uppercase">
              CHIEF EXECUTIVE, AMAZON
            </span>
          </div>
        </div>
      </AboutCard>
    </section>
  );
}
