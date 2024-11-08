import Image from "next/image";
import Link from "next/link";
import githubIcon from "../../public/github.svg";

export default function Footer() {
  return (
    <>
      <footer className="container mx-auto flex items-center justify-between py-8 mt-8">
        <p>&copy; 2024 AV Labs. All rights reserved.</p>
        <Link href="https://github.com/avlabsdev" target={"_blank"}>
          <Image src={githubIcon} alt="GitHub Icon" width={22} height={22} />
        </Link>
      </footer>
    </>
  );
}
