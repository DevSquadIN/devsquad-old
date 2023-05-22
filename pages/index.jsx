import Navbar from "@/components/navbar";
import { useAuthenticationStatus } from "@nhost/nextjs";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const { isAuthenticated } = useAuthenticationStatus();

  if (isAuthenticated) {
    router.push("/lessons");
    return null;
  }
  return (
    <>
      <Head>
        <title>devsquad</title>
      </Head>
      <div className={`h-screen bg-orange-50 px-4 sm:px-6`}>
        <Navbar landing />
        <main className="my-24 md:my-40">
          <h2 className="flex flex-col font-sans text-4xl font-medium text-indigo-800 md:text-center md:text-5xl lg:text-6xl">
            Collaborate with peers
            <span className="text-yellow-900">
              to build and learn React.js together.
            </span>
          </h2>
          <p className="my-12 mx-auto max-w-4xl font-serif text-indigo-700 sm:text-lg md:text-center">
            We are not reinventing the wheel. Instead we&apos;ve curated
            resources and developed micro-challenges to give you the best
            learning experience. We&apos;ve also build a community of peers and
            mentors so that you can build cool projects together.{" "}
          </p>
          {/* TODO: react hook form */}
          <div className="flex-col items-center md:flex">
            <div className="justify-center space-y-3 md:flex md:space-y-0 ">
              <input
                type="email"
                id="email"
                class="block w-72 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-orange-700 focus:ring-orange-700"
                placeholder="Enter your email"
                required
              />
              <button className="rounded-lg border bg-orange-700 py-2.5 px-4 text-orange-50 md:ml-4">
                Request early access
              </button>
            </div>
            <p className="w-fit text-sm font-extralight text-indigo-700">
              Join the private beta and contribute to our growth.
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
