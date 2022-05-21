import Head from "next/head";
import { Layout, siteTitle } from "../components";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Need to create contentful and engrosssing website?</p>
        <h2 className={utilStyles.headingLg}>You are at the right place!</h2>
        <p>
          I'm currently learning NextJS, which is an outstanding React
          framework.🚀
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
