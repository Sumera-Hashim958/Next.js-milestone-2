import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-4 border-blue-900 border-dotted bg-gradient-to-r from-green-500 via-purple-500 to-green-500 p-4 flex justify-between items-end">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4 text-xl">
            <li><Link href="./">Home</Link></li>
            <li><Link href="About" target='_blank'>About</Link></li>
            <li><Link href="Project" target='_blank'>Project</Link></li>
            <li><Link href="Contact" target='_blank'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
