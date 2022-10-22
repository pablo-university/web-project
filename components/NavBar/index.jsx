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
          <Trigger>Menú</Trigger>
        </ul>
      </div>
    </nav>
  )
}
