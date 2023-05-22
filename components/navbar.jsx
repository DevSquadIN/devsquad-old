import Image from "next/image";
import Link from "next/link";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import discord from "../public/images/discord.svg";
import twitter from "../public/images/twitter.svg";
import Menu from "./menu";
import { useSignOut } from "@nhost/nextjs";
import Login from "./login";

const Navbar = ({ home, landing }) => {
  const { signOut } = useSignOut();
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between py-6">
      {/* logo */}
      <Link
        href="/lessons"
        className="font-sans text-3xl font-medium text-indigo-800"
      >
        <div className="flex flex-col">
          <p className="flex">
            <span>devsquad</span>
            <span className="ml-0.5 text-xs font-extralight">beta</span>
          </p>
          <span className="text-xs font-extralight tracking-[0.23em]">
            collab.build.learn
          </span>
        </div>
      </Link>
      {/* logout button */}
      <div className="flex items-center gap-3">
        <Link href="#">
          <Image className="h-5 w-7" src={discord} alt="discord" />
        </Link>
        <Link href="#">
          <Image className="h-5 w-7" src={twitter} alt="twitter" />
        </Link>
        {home ? (
          <button onClick={signOut}>
            <HiArrowLeftOnRectangle className="h-6 w-6" />
            <span className="sr-only">Sign Out</span>
          </button>
        ) : landing ? (
          <Login />
        ) : (
          <Menu />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
