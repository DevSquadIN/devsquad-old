import { Dialog, Transition } from "@headlessui/react";
import { useProviderLink, useAuthenticationStatus } from "@nhost/nextjs";
import Link from "next/link";
import { Fragment, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export default function Login() {
  let [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated } = useAuthenticationStatus();

  const { github } = useProviderLink();

  if (isAuthenticated) {
    router.push("/lessons");
    return null;
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inline-flex">
        <button type="button" onClick={openModal} className="text-gray-800">
          <HiArrowRightOnRectangle className="h-6 w-6" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="flex flex-col items-center justify-center">
                  <Dialog.Panel className="w-80 transform overflow-hidden rounded-lg bg-white p-6 align-middle shadow-xl transition-all sm:w-96">
                    <Dialog.Title
                      as="h3"
                      className="pt-10 pb-20 font-serif text-5xl font-extrabold text-gray-200 transition-colors ease-in-out group-hover:text-gray-300 sm:text-6xl"
                    >
                      {" "}
                      logo
                    </Dialog.Title>
                    <div className="mt-4">
                      <Link
                        onClick={closeModal}
                        href={github}
                        className="inline-flex items-center gap-4 rounded-md border border-gray-100 bg-white px-6 py-2 font-sans text-gray-900 shadow-lg transition-all ease-in-out hover:bg-gray-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-1"
                      >
                        <AiOutlineGithub className="text-3xl" />
                        <p className="">Sign in with GitHub</p>
                      </Link>
                    </div>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
