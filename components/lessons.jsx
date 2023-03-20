import Link from "next/link";
import React from "react";
import { HiCheckCircle } from "react-icons/hi2";

const Lessons = ({ allLessonsData }) => {
  return (
    <div className="mx-auto grid max-w-5xl gap-y-6 gap-x-6 sm:grid-cols-2">
      {allLessonsData.map(({ id, title }) => (
        <Link
          href={`/lessons/${id}`}
          key={id}
          className="group relative flex flex-col items-center justify-between rounded-lg border-2 border-gray-200 bg-white p-4 transition-all ease-in-out hover:shadow-xl sm:px-6"
        >
          <div className="flex flex-col items-center py-20 sm:py-28">
            <div>
              <p className="font-serif text-7xl font-extrabold text-gray-200 transition-colors ease-in-out group-hover:text-gray-300">
                {id.substring(0, 2)}
              </p>
              {/* TODO: use localStorage/backend for managing the state */}
              <HiCheckCircle className="absolute top-0 right-0 m-2 h-6 w-6 text-emerald-500 md:h-8 md:w-8" />
            </div>
            <h1 className="text-center font-serif text-3xl font-bold text-gray-800 sm:text-4xl sm:leading-none">
              {title.substring(0, title.length - 9)}
            </h1>
          </div>
          <button className="mb-6 rounded-full border border-gray-100 bg-white px-8 py-2 font-sans text-gray-900 shadow-lg transition-all ease-in-out hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-gray-300 focus:ring-offset-1 sm:mb-8">
            Dive In
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Lessons;
