import Image from "next/image";
import Link from "next/link";
import flaskIcon from "../../public/flask.svg";
import githubIcon from "../../public/github.svg";

export default function HeaderNav() {
  return (
    <>
      <header className="flex items-center justify-between p-2">
        <Link className="p-2 opacity-75 hover:opacity-100 flex items-center gap-2 font-medium text-lg" href="/">
          <Image src={flaskIcon} alt="Flask Icon" width={20} height={20} />
          AV Labs</Link>
          <Link className="opacity-75 hover:opacity-100 p-2" href="https://github.com/avlabsdev" target={"_blank"}>
            <Image src={githubIcon} alt="GitHub Icon" width={22} height={22} />
          </Link>
      </header>
    </>
  );
}
