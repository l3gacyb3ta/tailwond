import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.background + " h-screen"}>
      <div className="overflow-hidden">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Space+Grotesk"
          />
        </Head>

        <main className="">
          <img
            className="opacity-60 absolute right-96 -top-10 z-0"
            height="100%"
            width="50%"
            src="/blobs/big.svg"
          />
          <img
            className="opacity-60 absolute left-0 top-0 -ml-32 -mt-32 z-0"
            height="23%"
            width="23%"
            src="/blobs/little1.svg"
          />
          <img
            className="opacity-60 absolute -right-48 -bottom-24"
            height="23%"
            width="34%"
            src="/blobs/big2.svg"
          />
          <img
            className="opacity-60 absolute -bottom-32 left-20 "
            height="23%"
            width="23%"
            src="/blobs/little2.svg"
          />
          <div className="ml-5">
            <div className="z-10">
              <h1 className="text-6xl font-black m-4">Comp</h1>
              <p className="text-gray-500 ml-5 mb-2">
                A computing platform for the future
              </p>
              <img src="/lines/line.svg" styles="" className="ml-14" />
            </div>

            <div className="border-l-2 border-gray-500 ml-5 pl-1 text-gray-500 mb-2 absolute bottom-8">
              <h2 className="font-bold">HOME</h2>
              <h2 className="hover:font-bold duration-150">PEOPLE</h2>
              <h2 className="hover:font-bold duration-150">SOFTWARE</h2>
              <h2 className="hover:font-bold duration-150">HARDWARE</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
