import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen]=useState(false)
  const links = ['Buy', 'Rent', 'Sell', 'Agents']
  const pages=[
    {label: 'Wishlist', path:'/wishlist'},
    {label: 'About', path:'/about'},
    {label: 'Contact',path:'/contact'},
    {label: 'Home',path:'/home'},
  ]  
  return (
    <header className="sticky top-0 z-50 bg-sand/90 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-2xl text-ink tracking-tight">
          Hermitage
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink/80">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="relative py-1 hover:text-ink transition-colors group"
              >
                {link}
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-brass transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
          {pages.map((page)=>(
            <li key={page.label}>
              <Link to={page.path}
              className="relative py-1 hover:text-ink transition-colors group"
              >
                {page.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-brass transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={()=>setIsOpen(!isOpen)}>
          <span className="w-6 h-0.5 bg-ink"/>
          <span className="w-6 h-0.5 bg-ink"/>
          <span className="w-6 h-0.5 bg-ink"/>
       </button>

        <button className="bg-ink text-sand text-sm font-body px-5 py-2.5 rounded-full hover:bg-ink/90 transition-colors">
          List a property
        </button>
      </nav>
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 font-body text-sm text-ink/80">
          {links.map((link)=>(
            <li key={link}>
              <a href="#" onClick={()=>setIsOpen(false)}>{link}
              </a>
              </li>
          ))}
          {pages.map((page)=>(
            <li key={page.label}>
              <Link to={page.path} onClick={()=>setIsOpen(false)}>
              {page.label}
              </Link>
            </li>
          ))}
          </ul>
       )}
    </header>
  )
}
