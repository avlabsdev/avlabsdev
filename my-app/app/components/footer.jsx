import Image from "next/image";
import Link from "next/link";
import githubIcon from "../../public/github.svg";
import dribbbleIcon from "../../public/dribbble.svg";

export default function Footer() {
  return (
    <>
      <footer className="container mx-auto flex items-center justify-between py-8 mt-8">
        <p>&copy; 2024 AV Labs. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="https://github.com/avlabsdev" target={"_blank"}>
            <Image src={githubIcon} alt="GitHub Icon" width={22} height={22} />
          </Link>
          <Link href="https://dribbble.com/avlabsdev" target={"_blank"}>
            <Image
              src={dribbbleIcon}
              alt="Dribbble Icon"
              width={22}
              height={22}
            />
          </Link>
        </div>
      </footer>
    </>
  );
}
