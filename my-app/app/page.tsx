import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <section>
        <div className="flex flex-col gap-8 relative">
          <h1 className="text-5xl w-2/3 font-bold z-10">
            Great to meet you! I&apos;m{" "}
            <span className="border-b-4 border-black">Aaron Varga</span>.
          </h1>
          <p className="w-1/2 z-10">
            Based in Cleveland, OH, I&apos;m a front-end developer with 3+ years
            experience building fast, modern, beautiful web apps.
          </p>
          <Image
            className="absolute top-0 right-0 z-0 rounded-full"
            src="/av.webp"
            alt="Aaron Varga"
            width={300}
            height={300}
          />
          <p className="mt-4 border-b-2 border-black w-fit font-medium">
            hello@avlabs.dev
          </p>
        </div>
      </section>
      <section className="border-t-2 pt-16">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">HTML</span>
            <span>20+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">CSS</span>
            <span>20+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">JavaScript</span>
            <span>5+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">React JS</span>
            <span>2+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">Next JS</span>
            <span>1+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold">Supabase</span>
            <span>1+ Years Experience</span>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-7xl font-bold">Projects</h2>
          <a href="#/" className="border-b-2 font-medium">
            View GitHub
          </a>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-16">
          <a href="#/" className="flex flex-col gap-2">
            <Image
              src="/cannabis-app4.png"
              alt="Cannabis App"
              width={300}
              height={300}
              className="w-full h-full object-fill"
            />
            <span className="font-bold text-2xl">GoodMj</span>
            <span>HTML, CSS, JS, React JS</span>
          </a>
          <a href="#/" className="flex flex-col gap-2">
            <Image
              src="/cannabis-app4.png"
              alt="Cannabis App"
              width={300}
              height={300}
              className="w-full h-full object-fill"
            />
            <span className="font-bold text-2xl">GoodMj</span>
            <span>HTML, CSS, JS, React JS</span>
          </a>
          <a href="#/" className="flex flex-col gap-2">
            <Image
              src="/cannabis-app4.png"
              alt="Cannabis App"
              width={300}
              height={300}
              className="w-full h-full object-fill"
            />
            <span className="font-bold text-2xl">GoodMj</span>
            <span>HTML, CSS, JS, React JS</span>
          </a>
          <a href="#/" className="flex flex-col gap-2">
            <Image
              src="/cannabis-app4.png"
              alt="Cannabis App"
              width={300}
              height={300}
              className="w-full h-full object-fill"
            />
            <span className="font-bold text-2xl">GoodMj</span>
            <span>HTML, CSS, JS, React JS</span>
          </a>
          <a href="#/" className="flex flex-col gap-2">
            <Image
              src="/cannabis-app4.png"
              alt="Cannabis App"
              width={300}
              height={300}
              className="w-full h-full object-fill"
            />
            <span className="font-bold text-2xl">GoodMj</span>
            <span>HTML, CSS, JS, React JS</span>
          </a>
          <a href="#/" className="flex flex-col gap-2">
            <Image
              src="/cannabis-app4.png"
              alt="Cannabis App"
              width={300}
              height={300}
              className="w-full h-full object-fill"
            />
            <span className="font-bold text-2xl">GoodMj</span>
            <span>HTML, CSS, JS, React JS</span>
          </a>
        </div>
      </section>
      <section className="flex gap-8">
        <div className="flex flex-col gap-8 w-1/2">
          <h2 className="text-7xl font-bold">Inquire</h2>
          <p className="pr-16">
            I would love to hear about your next project and how I can help.
            Please fill out the form and I will get back to you as soon as
            possible.
          </p>
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-1/2"
        >
          <input
            type="hidden"
            name="access_key"
            value="5a0c2d03-4684-4239-99e6-df01b6f9c054"
          />
          <div className="grid grid-cols-1 gap-8">
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 p-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 p-2"
              required
            />
            <textarea
              placeholder="Message"
              className="border-b-2 p-2"
              required
            />
            <input type="checkbox" name="botcheck" className="hidden" />
          </div>
          <button type="submit" className="border-b-2 mt-8 font-medium">
            Send
          </button>
        </form>
      </section>
    </div>
  );
}
