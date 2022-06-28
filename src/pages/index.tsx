import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/Sketch"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        <ConnectButton />
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Zondrian</h1>

        <p className={styles.description}>
          Inspired by Piet Mondrian + Generative Art + Zora. <br />{" "}
          {"Today's mint:"}
        </p>

        <div
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <DynamicComponentWithNoSSR />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}