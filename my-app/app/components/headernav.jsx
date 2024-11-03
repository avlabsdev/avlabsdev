// import Image from "next/image";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link href="/">AV Labs</Link>
        <nav className="flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
}
