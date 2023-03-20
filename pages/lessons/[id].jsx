import Head from "next/head";
import Layout from "../../components/layout";
import { getAllLessonsIds, getLessonData } from "../../lib/lessons";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import Toggle from "../../components/switch";

export const getStaticProps = async ({ params }) => {
  const lessonData = await getLessonData(params.id);
  return {
    props: {
      lessonData,
    },
  };
};
export async function getStaticPaths() {
  const paths = getAllLessonsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Lesson({ lessonData }) {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl">
        <Head>
          <title>{lessonData.title}</title>
        </Head>
        <header className="relative mx-auto flex max-w-md flex-col items-center justify-center pt-44 text-center md:max-w-none">
          <h1 className="z-10 font-serif text-3xl font-bold leading-snug tracking-normal text-gray-800 md:-mt-4 md:text-7xl md:leading-none">
            {lessonData.title.substring(0, lessonData.title.length - 9)}
          </h1>
          <span className="pointer-events-none absolute z-0 scale-[2.3] font-serif text-8xl font-extrabold text-gray-100/95 transition-all md:scale-[4]">
            <span className="sr-only">lesson</span>
            {lessonData.id.substring(0, 2)}
          </span>
        </header>
        <div
          className={`prose prose-zinc mx-auto mt-36 lg:prose-lg`}
          dangerouslySetInnerHTML={{ __html: lessonData.contentHtml }}
        />
        <div className="mt-20 flex flex-col items-center font-sans">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Finished learning?
          </h3>
          <p className="my-4 text-center font-medium tracking-wide text-gray-600 md:my-6 md:text-lg">
            Mark this lesson as complete to track your progress.
          </p>
          <Toggle />
        </div>
        {lessonData.next !== "" && (
          <div className="mb-20 sm:px-5 lg:px-10">
            <Link
              className="mx-auto block rounded-md border border-gray-200 py-20 text-center font-serif text-3xl font-medium capitalize hover:shadow-lg md:text-5xl"
              href={`/lessons/${lessonData.next}`}
            >
              <span className="my-1 block font-sans text-sm md:my-2 md:text-base">
                Up Next
              </span>
              <div className="flex items-center justify-center">
                <div className="max-w-lg">{lessonData.nextTitle}</div>
                <HiArrowLongRight className="ml-2 inline-block text-2xl md:ml-3 md:text-4xl" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}
