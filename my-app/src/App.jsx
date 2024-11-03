// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <header className="w-full border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between p-2">
          <a href="#/" className="p-2 font-semibold text-lg flex items-center gap-2 hover:opacity-75 transition-opacity	">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5"><path fill="#000000" d="M288 0L160 0 128 0C110.3 0 96 14.3 96 32s14.3 32 32 32l0 132.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512l309.2 0c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5L320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L288 0zM192 196.8L192 64l64 0 0 132.8c0 23.7 6.6 46.9 19 67.1L309.5 320l-171 0L173 263.9c12.4-20.2 19-43.4 19-67.1z" /></svg>
            AV Labs</a>
          <nav className="flex items-center gap-4">
            <a href="#/" className="p-2 font-medium hover:opacity-75 transition-opacity	">Home</a>
            <a href="#/" className="p-2 font-medium hover:opacity-75 transition-opacity	">About</a>
            <a href="#/" className="p-2 font-medium hover:opacity-75 transition-opacity	">Contact</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <section>
          Main
        </section>
      </main>
      <footer className="container mx-auto p-4 flex items-center justify-between">
        <p>&copy; 2024 <a href="#/" className="font-medium hover:opacity-75">AV Labs</a>. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#/" className="p-2 font-medium hover:opacity-75">Privacy Policy</a>
          <a href="#/" className="p-2 font-medium hover:opacity-75">Terms of Service</a>
        </div>
      </footer>
    </>
  )
}

export default App
