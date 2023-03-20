import Image from "next/image";
import Link from "next/link";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import discord from "../public/images/discord.svg";
import twitter from "../public/images/twitter.svg";
import Menu from "./menu";

const Navbar = ({ home }) => {
  return (
    <nav className="mx-auto flex max-w-5xl items-center justify-between py-6">
      {/* logo */}
      {/* TODO: user logged in -> lessons page; not logged in: landing page */}
      <Link
        href="/lessons"
        className="font-serif font-bold tracking-wider text-gray-900"
      >
        nxt100
      </Link>
      {/* logout button */}
      <div className="flex items-center gap-2">
        <Link href="#">
          <Image className="h-4 w-7" src={discord} alt="discord" />
        </Link>
        <Link href="#">
          <Image className="h-4 w-7" src={twitter} alt="twitter" />
        </Link>
        {home ? (
          <button>
            <HiArrowRightOnRectangle className="h-6 w-6" />
          </button>
        ) : (
          <Menu />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
