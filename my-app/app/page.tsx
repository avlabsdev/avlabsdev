import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <section>
        <div className="flex flex-col gap-8 relative -mb-4 sm:-mb-0 lg:pb-0 sm:pb-0">
          <Image
            className="relative -mb-16 sm:mb-0 sm:hidden -top-16 right-0 z-0 lg:w-1/3 md:w-1/2 sm:w-1/2 opacity-75"
            src="/av.webp"
            alt="Aaron Varga"
            width={425}
            height={425}
          />
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl sm:w-2/3 w-fit font-bold z-10">
            Great to meet you!
            <br />
            I&apos;m{" "}
            <span className="border-b-4 border-black">Aaron Varga</span>.
          </h1>
          <p className="w-auto px-2 sm:px-0 sm:w-1/2 z-10">
            Based in Cleveland, OH, I&apos;m a front-end developer with 3+ years
            experience building fast, modern, beautiful web apps.
          </p>
          <Image
            className="hidden sm:absolute -top-16 right-0 z-0 lg:w-1/3 md:w-1/2 sm:w-1/2 opacity-75"
            src="/av.webp"
            alt="Aaron Varga"
            width={425}
            height={425}
          />
          <p className="mt-4 border-b-2 border-black w-fit font-medium">
            hello@avlabs.dev
          </p>
        </div>
      </section>
      <section className="border-t-2 pt-16 -mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl font-bold">
              HTML
            </span>
            <span className="text-sm sm:text-base">20+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl font-bold">
              CSS
            </span>
            <span className="text-sm sm:text-base">20+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl font-bold">
              JavaScript
            </span>
            <span className="text-sm sm:text-base">5+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl font-bold">
              React JS
            </span>
            <span className="text-sm sm:text-base">2+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl font-bold">
              Next JS
            </span>
            <span className="text-sm sm:text-base">1+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl font-bold">
              Supabase
            </span>
            <span className="text-sm sm:text-base">1+ Years Experience</span>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between">
          <h2 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold">
            Projects
          </h2>
          <a href="#/" className="border-b-2 font-medium">
            View GitHub
          </a>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
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
      <section className="flex sm:flex-row flex-col gap-8">
        <div className="flex flex-col gap-8 sm:w-1/2 w-auto">
          <h2 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold">
            Inquire
          </h2>
          <p className="sm:pr-16">
            I would love to hear about your next project and how I can help.
            Please fill out the form and I will get back to you as soon as
            possible.
          </p>
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="sm:w-1/2 w-auto flex flex-col"
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
          <button
            type="submit"
            className="border-b-2 mt-8 font-medium w-fit ml-auto"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
}
