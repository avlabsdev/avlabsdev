import Image from "next/image";
import Link from "next/link";
import githubIcon from "../../public/github.svg";

export default function Footer() {
    return (
      <>
        <footer className="flex p-4 items-center justify-between">
          <p>&copy; 2024 <a className="opacity-75 hover:opacity-100" href="#/">AV Labs</a>. All rights reserved.</p>
          <Link className="opacity-75 hover:opacity-100" href="#/">
            <Image src={githubIcon} alt="GitHub Icon" width={24} height={24} />
          </Link>
        </footer>
      </>
    );
  }
  