import Head from "next/head";

import { Layout } from "@/layouts/Layout";

import { MenuTable } from "@/components/MenuTable";

export default function MenuPage() {
  return (
    <>
      <Head>
        <title>Steak Shop | Menu</title>
      </Head>

      <Layout>
        <MenuTable />
      </Layout>
    </>
  );
}
