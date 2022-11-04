import Link from 'next/link'
import PrimaryButton from 'components/buttons/PrimaryButton'

export default function Menu({ className, style }) {
  return (
    <ul
      className={`menu menu-horizontal p-0 [ hidden md:flex gap-1 ${className} ]`}
      style={style}
    >
      <li>
        <Link href="/donationPoints">
          <a>Puntos de donación</a>
        </Link>
      </li>
      <li>
        <Link href="/articles">
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
            <a>A quién ayudo</a>
          </li>
        </ul>
      </li>
      <Link href="/donate">
        <a>
          <PrimaryButton>DONAR</PrimaryButton>
        </a>
      </Link>
    </ul>
  )
}
