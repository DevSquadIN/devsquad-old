import { UserProvider } from "@/UserProvider";
import "@/styles/globals.css";
import { NhostProvider, NhostClient } from "@nhost/nextjs";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEXT_PUBLIC_NHOST_REGION || "",
});

export default function App({ Component, pageProps }) {
  return (
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </NhostProvider>
  );
}
