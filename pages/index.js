import Head from "next/head";
import { Button } from "react-bootstrap";

import Template from "@/components/Template";
import SimpleCalculator from "@/components/Calculators/Simple";

export default function Home() {
  return (
    <Template>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleCalculator />
    </Template>
  );
}
