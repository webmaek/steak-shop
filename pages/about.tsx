import Head from "next/head";
import Image from "next/image";

import { AboutCard } from "@/components/About/AboutCard";
import { Gallery } from "@/components/Gallery";
import { Partners } from "@/components/Partners";
import { Layout } from "@/layouts/Layout";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Steak Shop | About</title>
      </Head>

      <Layout>
        <section className="py-20">
          <AboutCard
            primaryImageUrl="/food1.jpeg"
            primaryImageAlt="Coffee"
            secondaryImageUrl="/food2.png"
            secondaryImageAlt="Food"
          />
        </section>
        <Gallery />
        <section className="py-20">
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
        <Partners />
      </Layout>
    </>
  );
}
