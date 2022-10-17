import { BASE_PATH } from 'utils'
import Link from 'next/link'
// import Image from "next/image";
import Trigger from 'components/drawer/Trigger'
import PrimaryButton from 'components/buttons/PrimaryButton'

export default function index() {
  return (
    <nav className="navbar bg-base-100 [ shadow rounded-2xl md:px-8 ]">
      <div className="flex-1">
        <Link href="/">
          <a>
            <img
              src={`${BASE_PATH}/logo.svg`}
              alt="logo hemocentro maldonado"
              width={200}
              height={50}
            />
          </a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 [ hidden lg:flex gap-1 ]">
          <li>
            <Link href="/donationPoints">
              <a>Puntos de donación</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li tabIndex={0}>
            <a>
              Información
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <Link href="/hoursAndConditions">
                  <a>Horarios y condiciones</a>
                </Link>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <Link href="/donate">
            <a>
              <PrimaryButton>DONAR</PrimaryButton>
            </a>
          </Link>
        </ul>
        <ul className="menu menu-horizontal p-0 [ blok lg:hidden ]">
          <Trigger>Menú</Trigger>
        </ul>
      </div>
    </nav>
  )
}
