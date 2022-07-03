import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import dynamic from "next/dynamic";
import MintButton from "../components/MintButton";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/Sketch"),
  { ssr: false }
);

export default function Home() {
  const footer = (
    <footer className={styles.footer}>
      <a
        href="https://twitter.com/crypblizz"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </footer>
  );

  const collectionGrid = () => {
    return (
      <div className="grid grid-cols-3 gap-6">
        <div className="h-96 w-96 border-solid border-2 border-sky-500 mx-4" />
        <div className="h-96 w-96 border-solid border-2 border-sky-500 mx-4" />
        <div className="h-96 w-96 border-solid border-2 border-sky-500 mx-4" />
        <div className="h-96 w-96 border-solid border-2 border-sky-500 mx-4" />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Zondrian</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center p-4">
        <ConnectButton />
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>Zondrian</h1>

        <p className="my-10 mx-0 text-xl text-center">
          Inspired by Piet Mondrian + Generative Art + Zora.
        </p>

        <div className="flex justify-center items-center">
          {/* <DynamicComponentWithNoSSR /> */}
          {collectionGrid()}
        </div>
        <MintButton />
      </main>
      {footer}
    </div>
  );
}
