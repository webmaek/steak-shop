import Image from "next/image";

import { AboutCard } from "../About/AboutCard";

export function ChefBio() {
  return (
    <section className="py-20">
      <AboutCard reversed primaryImageUrl="/chef1.jpeg" primaryImageAlt="Chef">
        <div>
          <Image
            src="/signature.png"
            alt="Chef's Signature"
            width={180}
            height={70}
          />
        </div>
      </AboutCard>
    </section>
  );
}
