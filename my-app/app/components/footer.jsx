import Image from "next/image";
import Link from "next/link";
import githubIcon from "../../public/github.svg";

export default function Footer() {
    return (
      <>
        <footer className="flex p-4 items-center justify-between">
          <p>&copy; 2024 AV Labs. All rights reserved.</p>
          <Link className="opacity-75 hover:opacity-100" href="https://github.com/avlabsdev" target={"_blank"}>
            <Image src={githubIcon} alt="GitHub Icon" width={22} height={22} />
          </Link>
        </footer>
      </>
    );
  }
  