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
          className="rounded-xl max-w-full md:w-1/2"
        />
        <div className="flex flex-col gap-4 max-w-full">
          <h1 className="font-bold text-4xl text-center sm:text-center md:text-left sm:text-6xl md:text-3xl">
            Hi, I&apos;m A-a-ron 😀
          </h1>
          <p className="">
            Front-End Engineer with over 3 years of experience building
            beautiful, modern, fast apps with HTML, CSS, & JS. I worked as a web
            graphics designer for over 15 years. Development & engineering are
            my love and passion today.
          </p>
          <div className="flex flex-col gap-4 mt-4 md:flex-row">
            <Link
              className="rounded-xl py-4 px-8 text-center text-black font-medium bg-white opacity-75 hover:opacity-100 shadow-lg hover:shadow-gray-800/50 transition-shadow transition-colors w-full"
              href="https://github.com/avlabsdev"
              target={"_blank"}
            >
              <span className="drop-shadow-lg">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
