import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>First Post</title>
      </Head>

      <main>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <Image
          src="/images/money.gif"
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </main>
      <style jsx>{`
        h2 {
          background-color: red;
        }
      `}</style>
    </div>
  );
}
