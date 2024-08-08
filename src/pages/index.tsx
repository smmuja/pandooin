import { Inter } from "next/font/google";
import Head from "next/head";
import { HomeWrapper } from "features/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Zamrood by Pandooin | Premium Travel Experiences in Indonesia
        </title>
      </Head>
      <main>
        <HomeWrapper />
      </main>
    </>
  );
}
