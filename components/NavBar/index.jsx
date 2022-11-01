import Link from 'next/link'
import logo from 'img/logo.svg'
import Trigger from 'components/drawer/Trigger'
import Menu from 'components/NavBar/Menu'

export default function index() {
  return (
    <nav className="navbar bg-base-100 [ shadow md:rounded-2xl md:px-8 ]">
      <div className="flex-1">
        <Link href="/">
          <a>
            <img
              src={logo.src}
              alt="logo hemocentro maldonado"
              width={200}
              height={50}
            />
          </a>
        </Link>
      </div>
      <div className="flex-none">
        <Menu></Menu>
        <ul className="menu menu-horizontal p-0 [ blok md:hidden ]">
          <Trigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Trigger>
        </ul>
      </div>
    </nav>
  )
}
