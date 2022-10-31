import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Heading from 'components/layouts/Heading'
import articlesSvg from 'img/articles/articles.svg'

export default function HoursAndConditios() {
  return (
    <Layout>
      <Container>
        <Heading
          title={'hoursAndConditios'}
          description={
            'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!'
          }
          imageUrl={articlesSvg.src}
        >
          --mas contenido
        </Heading>
      </Container>
      <Container>--content</Container>
    </Layout>
  )
}
