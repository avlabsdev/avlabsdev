import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <section>
        <div className="flex flex-col gap-8 relative -mb-4 sm:-mb-0 lg:pb-0 sm:pb-0">
          <Image
            className="relative -mb-16 sm:mb-0 sm:hidden -top-16 right-0 z-0 lg:w-1/3 md:w-1/2 sm:w-1/2 opacity-75 w-full"
            src="/av.webp"
            alt="Aaron Varga"
            width={2448}
            height={2448}
          />
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl sm:w-2/3 w-fit font-bold z-10">
            Great to meet you!
            <br />
            I&apos;m{" "}
            <span className="border-b-4 border-black dark:border-white">
              Aaron Varga
            </span>
            .
          </h1>
          <p className="w-auto sm:px-0 sm:w-1/2 z-10">
            Web applications software developer creating his own opportunities
            in this world.
          </p>
          <Image
            className="hidden sm:flex sm:absolute -top-16 right-0 z-0 lg:w-1/3 md:w-1/2 sm:w-1/2 opacity-75"
            src="/av.webp"
            alt="Aaron Varga"
            width={2448}
            height={2448}
          />
          <p className="mt-4 border-b-2 border-black dark:border-white w-fit font-medium">
            hello@avlabs.dev
          </p>
        </div>
      </section>
      <section className="border-t pt-16 -mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
              UI Design
            </span>
            <span className="text-sm sm:text-base">20+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
              HTML
            </span>
            <span className="text-sm sm:text-base">20+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
              CSS
            </span>
            <span className="text-sm sm:text-base">20+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
              JavaScript
            </span>
            <span className="text-sm sm:text-base">5+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
              React JS
            </span>
            <span className="text-sm sm:text-base">2+ Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
              Next JS
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
          <a
            href="https://github.com/avlabsdev"
            target="_blank"
            className="border-b-2 font-medium border-black dark:border-white"
          >
            View GitHub
          </a>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
          <span className="flex flex-col gap-2">
            <Image
              src="/goodmj-share-preview.jpg"
              alt="Cannabis App"
              width={1920}
              height={1080}
            />
            <span className="font-bold sm:text-2xl text-xl sr-only">
              GoodMj
            </span>
            <span className="italic sr-only">Affordable cannabis for all</span>
          </span>
          <span className="flex flex-col gap-2">
            <Image
              src="/frontendfury-share-preview.jpg"
              alt="AV Labs Blog"
              width={1920}
              height={1080}
            />
            <span className="font-bold sm:text-2xl text-xl sr-only">
              frontEndFury
            </span>
            <span className="italic sr-only">
              Front-end development education platform
            </span>
          </span>
          <span className="flex flex-col gap-2">
            <Image
              src="/pinkcloud-share-preview.jpg"
              alt="Interactive rating component"
              width={1920}
              height={1080}
            />
            <span className="font-bold sm:text-2xl text-xl sr-only">
              Pink Cloud
            </span>
            <span className="italic sr-only">Sober Support App</span>
          </span>
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
              name="name"
              className="border-b-2 p-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border-b-2 p-2"
              required
            />
            <textarea
              placeholder="Message"
              className="border-b-2 p-2"
              name="message"
              required
            />
            <input type="checkbox" name="botcheck" className="hidden" />
          </div>
          <button
            type="submit"
            className="border-b-2 border-black dark:border-white mt-8 font-medium w-fit ml-auto"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
}
