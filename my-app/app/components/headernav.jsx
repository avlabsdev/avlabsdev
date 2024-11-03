import Image from "next/image";
import Link from "next/link";
import flaskIcon from "../../public/flask.svg";
import barsIcon from "../../public/bars.svg";

export default function HeaderNav() {
  return (
    <>
      <header className="flex items-center justify-between p-2">
        <Link className="p-2 opacity-75 hover:opacity-100 flex items-center gap-2 font-medium text-lg" href="/">
          <Image src={flaskIcon} alt="Flask Icon" width={20} height={20} />
          AV Labs</Link>
        <Link href="#/" className="opacity-75 hover:opacity-100">
          <Image src={barsIcon} alt="Flask Icon" width={36} height={36} className="p-2 sm:hidden" />
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          <Link className="p-2 opacity-75 hover:opacity-100" href="/">Home</Link>
          <Link className="p-2 opacity-75 hover:opacity-100" href="/projects">Projects</Link>
          <Link className="p-2 opacity-75 hover:opacity-100" href="/about">About</Link>
          <Link className="p-2 opacity-75 hover:opacity-100" href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
}
