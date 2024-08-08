import { Inter } from "next/font/google";
import { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Zamrood by Pandooin | Premium Travel Experiences in Indonesia
        </title>
      </Head>
      <main>Home page</main>
    </>
  );
}
