import Head from "next/head";

import { Layout } from "@/layouts/Layout";

import { About } from "@/components/About";
import { Reservation } from "@/components/Reservation";
import { Gallery } from "@/components/Gallery";
import { ChefBio } from "@/components/ChefBio";
import { Partners } from "@/components/Partners";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Steak Shop | Home</title>
      </Head>

      <Layout>
        <About />
        <Reservation />
        <ChefBio />
        <Gallery />
        <Partners />
      </Layout>
    </>
  );
}
