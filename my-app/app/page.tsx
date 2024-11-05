import Image from "next/image";
import avPhoto from "../public/av.webp";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col grow h-full max-w-full">
      <div className="flex flex-col items-center gap-8 max-w-full md:flex-row">
        <Image
          src={avPhoto}
          alt="Picture of the author"
          className="rounded-xl max-w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3"
        />
        <div className="flex flex-col gap-4 max-w-full">
          <h1 className="font-bold text-4xl text-center sm:text-left sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Hi, I&apos;m A-a-ron 😀
          </h1>
          <p className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-3xl px-2 sm:px-0">
            Front-End Engineer with over 3 years of experience building
            beautiful, modern, fast applications with HTML, CSS, & JS.
          </p>
          <div className="flex flex-col gap-4 mt-4 md:flex-row">
            <Link
              className="text-lg rounded-xl py-4 px-8 text-center text-white font-medium bg-blue-500 hover:bg-blue-400 shadow-lg hover:shadow-blue-700/50 transition-shadow transition-colors md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2"
              href="https://www.linkedin.com/in/aaronvarga/"
              target={"_blank"}
            >
              <span className="drop-shadow-lg sm:text-xl md:text-lg lg:text-xl">
                LinkedIn
              </span>
            </Link>
            <Link
              className="text-lg rounded-xl py-4 px-8 text-center text-white font-medium bg-purple-500 hover:bg-purple-400 shadow-lg hover:shadow-purple-700/50 transition-shadow transition-colors hover:shadow-purple-700/50 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2"
              href="https://github.com/avlabsdev"
              target={"_blank"}
            >
              <span className="drop-shadow-lg sm:text-xl md:text-lg lg:text-xl">
                GitHub
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
