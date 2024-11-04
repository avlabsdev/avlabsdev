import Image from "next/image";
import avPhoto from "../public/av.webp";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col grow h-full">
      <div className="flex items-center gap-8">
        <Image
          src={avPhoto}
          alt="Picture of the author"
          className="rounded-full"
          height={128}
        />
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-bold text-2xl">Welcome to my app!</h1>
          <p>This is my intro paragraph.</p>
          <div className="flex gap-2">
            <Link
              className="bg-white rounded-xl py-2 px-8 text-center text-black font-medium mt-4 w-1/2"
              href="#/"
            >
              GitHub
            </Link>
            <Link
              className="bg-white rounded-xl py-2 px-8 text-center text-black font-medium mt-4 w-1/2"
              href="#/"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
