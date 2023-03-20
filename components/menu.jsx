import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { links } from "../utils/utils";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Dropdown() {
  const router = useRouter();
  return (
    <div className="z-20 text-right w-fit">
      <Menu as="div" className="relative flex text-left">
        {({ open }) => (
          <>
            <Menu.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-opacity-75">
              {!open ? (
                <HiBars3 className="w-6 h-6" aria-hidden="true" />
              ) : (
                <HiXMark className="w-6 h-6" aria-hidden="true" />
              )}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white rounded-md shadow-lg top-8 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {links.map((item) => (
                    <Menu.Item key={item.id}>
                      {({ active }) => (
                        <Link
                          href={`${item.path}`}
                          className={`${
                            active ? "bg-gray-100" : "text-gray-900"
                          } ${
                            item.path == router.asPath && "text-blue-400"
                          } group mx-auto flex w-[95%] items-start truncate rounded-md px-2 py-2 text-sm`}
                        >
                          <span className="capitalize truncate">
                            {item.name}
                          </span>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
