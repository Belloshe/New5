import Link from 'next/link'
import '../../style/navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="/">Home</Link>
        </li>
        <li className="navbar-item navbar-text-center">Isabelle Ibrahimsson</li>
        <li className="navbar-item navbar-right">
          <Link href="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  )
}
