import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { links } from "../utils/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSignOut } from "@nhost/nextjs";

function Dropdown() {
  const router = useRouter();
  const { signOut } = useSignOut();
  return (
    <div className="z-20 w-fit text-right">
      <Menu as="div" className="relative flex text-left">
        {({ open }) => (
          <>
            <Menu.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-opacity-75">
              {!open ? (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiXMark className="h-6 w-6" aria-hidden="true" />
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
              <Menu.Items className="absolute right-0 top-8 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {links.map((item) => (
                    <Menu.Item key={item.id}>
                      {({ active }) => (
                        <Link
                          href={`${item.path}`}
                          className={`${active && "bg-gray-100"} ${
                            item.path == router.asPath
                              ? "text-blue-400"
                              : "text-gray-800"
                          } group mx-auto flex w-[95%] items-start truncate rounded-md px-2 py-2 text-sm`}
                        >
                          <span className="truncate capitalize">
                            {item.name}
                          </span>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                  <div className="my-1.5 border-t border-gray-200"></div>
                  <div>
                    <button
                      onClick={signOut}
                      className={`group mx-auto flex w-[95%] items-start truncate rounded-md px-2 py-2 text-sm text-red-400 hover:bg-gray-100`}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}

export default Dropdown;
