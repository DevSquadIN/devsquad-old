import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-32 flex flex-col items-center gap-2 pb-12 font-serif">
      <p className="font-bold tracking-wider text-gray-900">
        enjoy learning !!
      </p>
      <Link
        href="/about"
        className="text-center font-sans text-gray-600 hover:underline"
      >
        About
      </Link>
    </div>
  );
};

export default Footer;
