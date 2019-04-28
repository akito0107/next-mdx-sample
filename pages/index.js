import Doc from "../contents/test.mdx";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism.min.css"
        />
      </Head>
      <Doc />
    </>
  );
}
