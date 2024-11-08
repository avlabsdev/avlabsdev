import Image from "next/image";
import Link from "next/link";
import flaskIcon from "../../public/flask.svg";

export default function HeaderNav() {
  return (
    <>
      <header className="flex items-center justify-between container mx-auto py-8 z-10">
        <Link
          className="opacity-75 hover:opacity-100 flex items-center gap-2 font-medium text-lg"
          href="/"
        >
          <Image src={flaskIcon} alt="Flask Icon" width={20} height={20} />
          AV Labs
        </Link>
        <Link
          className="opacity-75 hover:opacity-100 border-b-2 border-black font-medium"
          href="https://github.com/avlabsdev"
          target={"_blank"}
        >
          Download Resume
        </Link>
      </header>
    </>
  );
}
