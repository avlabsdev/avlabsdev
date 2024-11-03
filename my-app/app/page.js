// import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="container mx-auto p-4 flex items-center justify-between">
        <a href="#/">AV Labs</a>
        <nav className="flex items-center gap-8">
          <a href="#/">Home</a>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        Main
      </main>
      <footer className="container mx-auto p-4">
        Footer
      </footer>
    </>
  );
}
