"use client"

import classNames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiFillBug } from "react-icons/ai"

const NavBar = () => {
  const currPath = usePathname()

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ]

  return (
    <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ href, label }, index) => (
          <Link
            key={index}
            className={classNames({
              "text-zinc-900": href === href,
              "text-zinc-500": href !== href,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={href}
          >
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
