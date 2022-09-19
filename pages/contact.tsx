import Head from "next/head";

import { Layout } from "@/layouts/Layout";

import { ContactUs } from "@/components/ContactUs";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Steak Shop | Contact</title>
      </Head>

      <Layout>
        <ContactUs />
      </Layout>
    </>
  );
}
