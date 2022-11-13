import NavBar from 'components/NavBar'
import Container from 'components/layouts/Container'
import Drawer from 'components/drawer/index'
import Menu from 'components/NavBar/Menu'
import Toast from 'components/Toast'

export default function Layout({ children, main }) {
  return (
    <Drawer
      aside={
        <Menu
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        ></Menu>
      }
    >
      <div className="layout grid min-h-screen">
        <header className="row-[1/2] col-[1/2] z-10 md:mt-8 container p-0 m-auto sticky top-0 md:top-4">
          <NavBar />
        </header>
        {!main && <main>{children}</main>}
        {main && main}
        <footer className="footer p-10 bg-base-200 text-base-content justify-between [ bg-neutral text-white ]">
          <div>
            <h3>Hemocentro Maldonado</h3>
            <p>Ventura Alegre, 20000 Maldonado, Departamento de Maldonado</p>
            <p>Teléfono: 4225 8509</p>
          </div>
          <div>
            <h3>Más sobre nosotros</h3>
            <a className="link link-hover">Nuestro equipo</a>
            <a className="link link-hover">Conocer instalaciones</a>
            <a className="link link-hover">Capacitaciones</a>
            <a className="link link-hover">Trabajar</a>
          </div>
        </footer>
        <footer className="footer px-10 py-4 border-t border-base-300 [ bg-neutral text-white items-center ]">
          <div>
            <p>Todos los derechos reservados 2023 Uruguay</p>
          </div>
          <div>
            <p>Privacidad | Términos y Condiciones</p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  width="45"
                  height="44"
                  viewBox="0 0 45 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0257 13.3939V18.4865H13.4373V24.773H19.0257V38.938H25.6393V24.773H31.275L31.9495 18.4899H25.6393V13.3939C25.6393 12.4934 26.351 12.0448 26.6511 11.7683C27.1806 11.3163 29.7371 11.2455 29.7371 11.2455H32.2429V5.54917C30.9382 5.35426 29.6225 5.24162 28.3037 5.21191C18.8334 5.21191 19.0257 13.3939 19.0257 13.3939Z"
                    stroke="white"
                    strokeWidth="2.19219"
                    strokeMiterlimit="10"
                  />
                </svg>
              </a>
              <a>
                <svg
                  width="43"
                  height="44"
                  viewBox="0 0 43 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5652 8.2474C29.4966 8.2474 31.3489 9.02912 32.7146 10.4206C34.0803 11.8121 34.8475 13.6993 34.8475 15.6671V28.483C34.8475 30.4509 34.0803 32.3381 32.7146 33.7296C31.3489 35.121 29.4966 35.9028 27.5652 35.9028H14.9866C13.0552 35.9028 11.2029 35.121 9.83722 33.7296C8.47152 32.3381 7.70427 30.4509 7.70427 28.483V15.6671C7.70427 13.6993 8.47152 11.8121 9.83722 10.4206C11.2029 9.02912 13.0552 8.2474 14.9866 8.2474H27.5652ZM27.5652 5.54932H14.9866C12.3553 5.55732 9.83401 6.62588 7.97339 8.5216C6.11277 10.4173 5.06401 12.9862 5.05615 15.6671V28.483C5.06401 31.164 6.11277 33.7328 7.97339 35.6286C9.83401 37.5243 12.3553 38.5928 14.9866 38.6008H27.5652C30.1965 38.5928 32.7178 37.5243 34.5784 35.6286C36.439 33.7328 37.4878 31.164 37.4956 28.483V15.6671C37.4878 12.9862 36.439 10.4173 34.5784 8.5216C32.7178 6.62588 30.1965 5.55732 27.5652 5.54932Z"
                    fill="white"
                  />
                  <path
                    d="M29.9285 11.2827C29.5533 11.2827 29.1866 11.3961 28.8747 11.6084C28.5628 11.8207 28.3197 12.1226 28.1761 12.4757C28.0326 12.8288 27.995 13.2174 28.0682 13.5922C28.1414 13.9671 28.322 14.3114 28.5873 14.5817C28.8525 14.852 29.1905 15.036 29.5584 15.1106C29.9264 15.1852 30.3077 15.1469 30.6543 15.0006C31.0009 14.8544 31.2971 14.6067 31.5055 14.2889C31.7139 13.9711 31.8252 13.5974 31.8252 13.2152C31.8252 12.9614 31.7761 12.7101 31.6808 12.4757C31.5855 12.2412 31.4458 12.0282 31.2696 11.8487C31.0935 11.6693 30.8844 11.5269 30.6543 11.4298C30.4242 11.3327 30.1775 11.2827 29.9285 11.2827Z"
                    fill="white"
                  />
                  <path
                    d="M21.365 16.1629C22.5228 16.1623 23.6547 16.5115 24.6177 17.1664C25.5806 17.8214 26.3312 18.7526 26.7746 19.8423C27.2179 20.932 27.3341 22.1312 27.1084 23.2882C26.8827 24.4451 26.3252 25.5079 25.5066 26.342C24.6879 27.1761 23.6448 27.7441 22.5093 27.9741C21.3737 28.204 20.1967 28.0857 19.1272 27.6339C18.0577 27.1822 17.1437 26.4174 16.5009 25.4363C15.8581 24.4553 15.5153 23.3019 15.516 22.1223C15.5186 20.5426 16.1357 19.0284 17.232 17.9114C18.3284 16.7943 19.8146 16.1656 21.365 16.1629ZM21.365 13.4649C19.6844 13.4682 18.0424 13.9791 16.6466 14.9329C15.2508 15.8867 14.1639 17.2407 13.5231 18.8238C12.8824 20.4068 12.7166 22.1479 13.0467 23.8269C13.3768 25.5059 14.1881 27.0476 15.3779 28.257C16.5677 29.4664 18.0826 30.2893 19.7313 30.6218C21.38 30.9542 23.0884 30.7812 24.6407 30.1247C26.1929 29.4682 27.5193 28.3576 28.4522 26.9332C29.3851 25.5089 29.8827 23.8347 29.882 22.1223C29.8816 20.9838 29.6609 19.8566 29.2324 18.8051C28.804 17.7536 28.1763 16.7985 27.3853 15.9944C26.5942 15.1903 25.6553 14.553 24.6223 14.119C23.5893 13.6849 22.4824 13.4626 21.365 13.4649Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a>
                <svg
                  width="43"
                  height="44"
                  viewBox="0 0 43 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_607_1771)">
                    <path
                      d="M29.2392 10.8308C30.1092 10.8429 30.9679 11.0334 31.7641 11.3909C32.5603 11.7485 33.2776 12.2656 33.8734 12.9117C33.8734 12.9117 36.4024 12.4058 37.7993 11.4041C37.7993 11.4041 37.4484 13.3872 35.1214 14.9049H35.1412C35.32 14.9049 36.6242 14.8711 38.6765 13.8931C38.6765 13.8931 38.2826 15.0364 35.598 17.2117C35.7602 22.3583 33.2611 31.8724 24.0125 35.2585C21.9813 36.0156 19.8364 36.407 17.6736 36.4153C14.2084 36.4314 10.8142 35.4151 7.90863 33.4913C8.40515 33.5419 8.85202 33.5419 9.29889 33.5419C14.7673 33.5419 17.4154 30.6819 17.2697 30.6819H17.0678C12.4336 30.6819 11.3048 26.1626 11.3048 26.1626C11.676 26.3912 12.1066 26.4994 12.5395 26.4729C13.0991 26.461 13.6551 26.3783 14.1946 26.2267C8.96457 24.9653 9.15987 19.8525 9.15987 19.8525C9.86664 20.3331 10.6936 20.5975 11.5432 20.6147C11.6829 20.6163 11.8225 20.605 11.9603 20.581C7.18371 16.7294 10.0602 12.1326 10.0602 12.1326C15.4425 18.4967 22.0595 18.7226 22.9698 18.7226H23.079C22.5891 15.7345 23.7973 12.8644 27.0512 11.3029C27.73 10.9853 28.4692 10.8241 29.2161 10.8308M40.8446 6.56104L36.5646 9.62336C35.9109 10.0226 35.2041 10.3236 34.466 10.5171C32.9679 9.32525 31.1266 8.66869 29.226 8.64868C28.1635 8.63866 27.1121 8.86904 26.1476 9.3232C23.1088 10.7768 21.2618 13.286 20.8943 16.2977C17.297 15.5418 14.0555 13.5702 11.6954 10.7026L9.80866 8.4733L8.25289 10.9454C7.24991 12.6288 6.85209 14.615 7.12744 16.5642L7.00496 19.7783C6.97747 21.8186 7.64285 23.8059 8.88844 25.4038L9.21945 26.7191C9.69422 28.4176 10.6582 29.932 11.9867 31.0664C11.1029 31.2634 10.2004 31.3607 9.29558 31.3564C8.90168 31.3564 8.49453 31.3396 8.08407 31.3058L0.493896 30.6617L6.63422 35.2585C9.91104 37.4551 13.7512 38.6178 17.6736 38.6008C20.0876 38.5942 22.4822 38.1605 24.7507 37.3192C29.3013 35.6645 33.0566 32.2959 35.2438 27.9063C36.7569 24.9086 37.6119 21.6116 37.7496 18.2437C39.9443 16.318 40.5467 15.0904 40.7089 14.6216L42.4037 9.70768L40.0866 10.8071L40.8446 6.56104Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_607_1771">
                      <rect
                        width="42.3699"
                        height="43.1693"
                        fill="white"
                        transform="translate(0.460693 0.490234)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3306 4.79004C12.8319 4.79004 5.13062 12.4892 5.13062 21.9879C5.13062 25.3419 6.10499 28.4633 7.76652 31.1086L5.23984 37.209C4.93755 37.9396 5.28456 38.7768 6.01556 39.0817C6.38235 39.233 6.77408 39.2214 7.11292 39.0817L13.2133 36.5537C15.8583 38.2139 18.9766 39.1909 22.3306 39.1909C31.828 39.1909 39.5306 31.4866 39.5306 21.9879C39.5306 12.4892 31.828 4.79004 22.3306 4.79004ZM22.3306 36.3241C19.6526 36.3241 17.0257 35.5626 14.7355 34.1268L13.4816 33.3403L9.21218 35.1093L10.9812 30.8373L10.1947 29.583C8.75552 27.2932 7.99743 24.6668 7.99743 21.9879C7.99743 14.0858 14.4276 7.65642 22.3306 7.65642C30.2336 7.65642 36.6638 14.0853 36.6638 21.9879C36.6638 29.8909 30.2336 36.3241 22.3306 36.3241Z"
                    fill="white"
                  />
                  <path
                    d="M28.4111 28.0683C27.294 29.1881 25.4772 29.1881 24.3558 28.0683C24.3558 28.0683 16.2499 19.9611 16.2512 19.9611C15.1314 18.8414 15.1314 17.0272 16.2512 15.9075L18.2769 13.8813L21.317 18.9476L19.7969 20.4677L23.8493 24.5217L25.3693 23.0016L30.4403 26.0443L28.4111 28.0683Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4153 11.3802C22.4929 11.3802 30.1453 11.3802 35.1975 11.7444L35.4201 11.7647C36.0946 11.8254 36.8231 11.8962 37.5381 12.6348C37.8753 12.9721 38.2598 14.166 38.3913 15.0192C38.6045 16.8904 38.7171 18.7716 38.7286 20.6548V23.4339C38.7167 25.3182 38.6041 27.2006 38.3913 29.0729C38.2665 29.9059 37.8719 31.1167 37.5414 31.4337C36.8298 32.1689 36.0845 32.2397 35.4268 32.3038L35.1975 32.3274C30.233 32.6647 22.7559 32.6984 22.4187 32.6984C22.0308 32.6984 12.9754 32.6074 10.0851 32.3612C9.91305 32.3342 9.74779 32.3106 9.55218 32.2903C8.78323 32.1993 7.90972 32.0947 7.28242 31.4438C6.94516 31.1065 6.56068 29.916 6.43252 29.0661C6.21932 27.195 6.10673 25.3137 6.09526 23.4305V20.6785C6.10724 18.7952 6.21983 16.914 6.43252 15.0428C6.56405 14.1828 6.95527 12.9889 7.28579 12.6584C8.00078 11.9198 8.74613 11.8523 9.40378 11.7883L9.62638 11.768C14.6853 11.4072 22.331 11.4038 22.4052 11.4038H22.4153M22.4153 9.2116C22.4153 9.2116 14.628 9.2116 9.43751 9.58258C8.7124 9.6669 7.13402 9.67364 5.72765 11.1306C4.61806 12.2436 4.25382 14.7696 4.25382 14.7696C4.01798 16.7308 3.88851 18.7033 3.86597 20.6785V23.4575C3.88202 25.4402 4.00586 27.4206 4.23695 29.3899C4.23695 29.3899 4.59782 31.916 5.71078 33.0256C7.1239 34.4825 8.97546 34.4387 9.80175 34.5938C12.7696 34.8737 22.4153 34.9614 22.4153 34.9614C22.4153 34.9614 30.2094 34.9614 35.4032 34.5803C36.1283 34.496 37.7101 34.4859 39.1131 33.0289C40.2227 31.9193 40.5869 29.3933 40.5869 29.3933C40.8202 27.4241 40.9463 25.4437 40.9646 23.4609V20.6818C40.9485 18.6991 40.8247 16.7187 40.5936 14.7494C40.5936 14.7494 40.2328 12.2233 39.1198 11.1104C37.7101 9.65341 36.1283 9.64329 35.4099 9.56235C30.2094 9.18799 22.4153 9.18799 22.4153 9.18799V9.2116Z"
                    fill="white"
                  />
                  <path
                    d="M19.0864 16.5474V27.6028L28.5263 22.0751L19.0864 16.5474Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </footer>

        {process.env.NODE_ENV === 'development' && (
          <Toast className={'alert-warning'}>Dev mode</Toast>
        )}
      </div>
    </Drawer>
  )
}
