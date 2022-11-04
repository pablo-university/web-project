import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Heading from 'components/layouts/Heading'
import hoursAndConditionsSvg from 'img/hours-and-conditions/index.svg'

export default function HoursAndConditios() {
  return (
    <Layout>
      <Container>
        <Heading
          title={'Horarios y condiciones de donación'}
          description={
            'Si reúnes las siguientes condiciones puedes donar. Puedes revisar la lista de condiciones y cualquier duda que te surga puedes contactarte con nosotros que te resolveremos las dudas.'
          }
          imageUrl={hoursAndConditionsSvg.src}
        >
          <div className="grid gap-2 my-6">
            <h3>Lunes a viernes</h3>
            <ul>
              <li>MATUTINO: 8.30 a 12.30 hs.</li>
              <li>VESPERTINO: 14.30 a 19.00 hs.</li>
            </ul>
            <h3>Sábados</h3>
            <p>MATUTINO: 8.30 a 12.00 hs.</p>
          </div>
        </Heading>
      </Container>
      <Container>--content</Container>
    </Layout>
  )
}
