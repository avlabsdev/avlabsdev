// import Image from "next/image";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <>
      <header className="flex items-center justify-between p-2">
        <Link className="p-2" href="/">AV Labs</Link>
        <nav className="flex items-center gap-8">
          <Link className="p-2" href="/">Home</Link>
          <Link className="p-2" href="/projects">Projects</Link>
          <Link className="p-2" href="/about">About</Link>
          <Link className="p-2" href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
}
