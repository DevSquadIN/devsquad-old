import Head from "next/head";
import Lessons from "../../components/lessons";
import { getSortedLessonsData } from "../../lib/lessons";
import Layout from "../../components/layout";
import withAuth from "@/withAuth";

export async function getStaticProps() {
  const allLessonsData = getSortedLessonsData();
  return {
    props: {
      allLessonsData,
    },
  };
}

function LessonsHome({ allLessonsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>DevSquad</title>
        </Head>
        <Lessons allLessonsData={allLessonsData} />
      </Layout>
    </>
  );
}

export default withAuth(LessonsHome);
