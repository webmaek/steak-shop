import Head from "next/head";

import { Layout } from "@/layouts/Layout";

import { Reservation } from "@/components/Reservation";

export default function BookTablePage() {
  return (
    <>
      <Head>
        <title>Steak Shop | Book Table</title>
      </Head>

      <Layout>
        <section className="py-20">
          <Reservation />
        </section>
      </Layout>
    </>
  );
}
