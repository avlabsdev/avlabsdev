import Image from "next/image";
import avPhoto from "../public/av.webp";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col grow h-full">
      <div className="flex flex-col items-center gap-8">
        <Image
          src={avPhoto}
          alt="Picture of the author"
          className="rounded-full max-w-full"
          height={128 * 2}
        />
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-bold text-2xl">Hi, I'm A-a-ron 😀</h1>
          <p>
            Front-End Engineer with over 3 years of experience building
            beautiful, modern, fast applications with HTML, CSS, & JS.
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <Link
              className="rounded-xl py-3 px-8 text-center text-white font-medium bg-blue-500 hover:bg-blue-400 shadow-lg hover:shadow-blue-700/50 transition-shadow transition-colors"
              href="#/"
            >
              <span className="drop-shadow-lg">LinkedIn</span>
            </Link>
            <Link
              className="rounded-xl py-3 px-8 text-center text-white font-medium bg-purple-500 hover:bg-purple-400 shadow-lg hover:shadow-purple-700/50 transition-shadow transition-colors hover:shadow-purple-700/50"
              href="#/"
            >
              <span className="drop-shadow-lg">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
