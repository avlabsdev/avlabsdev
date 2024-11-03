// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <header className="container mx-auto flex items-center justify-between p-2">
        <a href="#/" className="p-2 font-semibold text-lg">AV Labs</a>
        <nav className="flex items-center gap-8">
          <a href="#/" className="p-2 font-medium">Home</a>
          <a href="#/" className="p-2 font-medium">About</a>
          <a href="#/" className="p-2 font-medium">Contact</a>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <section>
          Main
        </section>
      </main>
      <footer className="container mx-auto p-4">
        Footer
      </footer>
    </>
  )
}

export default App
