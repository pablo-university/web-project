import Link from 'next/link'
import successfullSvg from 'img/reservation/successfull.svg'
import PrimaryOutlineButton from 'components/buttons/PrimaryOutlineButton'
import Container from 'components/layouts/Container'
import Layout from 'components/layouts/Layout'
import ContainerSeparator from 'components/layouts/ContainerSeparator'

export default function Successfull() {
  return (
    <Layout>
      <ContainerSeparator>
        <Container className="grid justify-center justify-items-center gap-4">
          <h2>Excelente!!!</h2>
          <p>Los datos de la reserva fueron enviados a tu casilla de mail!</p>
          <Link href="/hoursAndConditions">
            <a>
              <PrimaryOutlineButton>
                Contemplar antes de ir
              </PrimaryOutlineButton>
            </a>
          </Link>
          <p>
            Si no recibiste nada, puedes{' '}
            <span className="text-primary">
              revisar en el paso anterior tu mail
            </span>
          </p>
          <img src={successfullSvg.src} alt="succesfull image" />
        </Container>
      </ContainerSeparator>
    </Layout>
  )
}
