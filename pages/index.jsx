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
        <title>nxt100</title>
      </Head>
      <div className={`h-full px-4 sm:px-6`}>
        <Navbar landing />
        Landing page
      </div>
    </>
  );
};

export default Home;
