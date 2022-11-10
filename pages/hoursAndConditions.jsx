import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import ContainerGrid from 'components/layouts/ContainerGrid'
import Heading from 'components/layouts/Heading'
import hoursAndConditionsSvg from 'img/hours-and-conditions/index.svg'
import ConditionCard from 'components/cards/ConditionCard'
import conditionsImages from 'img/hours-and-conditions/conditions'
import bottomImageSvg from 'img/hours-and-conditions/bottom-svg.svg'

export default function HoursAndConditios() {
  const [img0, img1, img2, img3, img4, img5] = conditionsImages
  return (
    <Layout>
      <ContainerSeparator>
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
        <Container className="grid gap-6 lg:grid-cols-2">
          <ConditionCard
            title="Tener la Cédula de Identidad vigente y en buen estado."
            src={img0.src}
          />
          <ConditionCard title="Tener entre 18 y 65 años." src={img1.src} />
          <ConditionCard
            title="Tener un ayuno de sólidos de no más de 4 horas. No haber consumido leche y/o lácteos. Recomendamos que tomes muchos líquido (mate, café, té, refrescos y jugos azucarados)."
            src={img2.src}
            className="lg:col-span-2"
          />
          <ConditionCard title="Pesar más de 50 kg." src={img3.src} />
          <ConditionCard title="Tener buen estado de salud." src={img4.src} />
          <ConditionCard
            title="Haber descansado 6 horas la noche anterior."
            src={img5.src}
          />
        </Container>

        <Container>
          <ContainerGrid className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div>
              <img src={bottomImageSvg.src} alt="not image provided" />
            </div>
            <div className="grid gap-4">
              <h3>
                En caso de estar en una de estas situaciones, es mejor que no
                dones en este momento
              </h3>
              <ul className="list-disc pl-2">
                <li> Si estas resfriado.</li>
                <li>
                  Si eres mujer y has donado sangre en los últimos 4 meses.
                </li>
                <li>
                  Si eres hombre y has donado sangre en los últimos 3 meses.
                </li>
                <li>Si has tenido hepatitis después de los 12 años.</li>
                <li>Durante todo el período de la lactancia materna.</li>
                <li>
                  Si estás tomando algún tipo medicación no suspenderla, ya que
                  puede ser perjudicial.
                </li>
                <li>
                  Si te hiciste un tatuaje o te has puesto un piercing en los
                  últimos 6 meses.
                </li>
              </ul>
            </div>
          </ContainerGrid>
        </Container>
      </ContainerSeparator>
    </Layout>
  )
}
