import Head from "next/head";
import Lessons from "../../components/lessons";
import { getSortedLessonsData } from "../../lib/lessons";
import Layout from "../../components/layout";

export async function getStaticProps() {
  const allLessonsData = getSortedLessonsData();
  return {
    props: {
      allLessonsData,
    },
  };
}

export default function LessonsHome({ allLessonsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>nxt100</title>
        </Head>
        <Lessons allLessonsData={allLessonsData} />
      </Layout>
    </>
  );
}
