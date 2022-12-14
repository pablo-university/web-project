import Link from 'next/link'
import { useState } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import Hero from 'components/Hero'
import PrimaryButton from 'components/buttons/PrimaryButton'
import TestimonialCard from 'components/cards/TestimonialCard'
import RoundedSmall from 'components/buttons/RoundedSmall'
import PrimaryOutlineButton from 'components/buttons/PrimaryOutlineButton'
import coverMaria from 'img/cover-maria.jpg'
import coverFranco from 'img/cover-franco.jpg'
import hemocentroImage from 'img/home/hemocentro.jpg'
import logoHemovida from 'img/home/logo-hemovida.jpg'
import logoAsse from 'img/home/logo-asse.jpg'
import logoSns from 'img/home/logo-sns.jpg'
import ContainerGrid from 'components/layouts/ContainerGrid'
import RecentArticles from 'components/RecentArticles'
import { getArticles } from 'connectors/getArticles'

export default function Home({ articles }) {
  const [testimonials] = useState([
    {
      name: 'María',
      description:
        'Hoy han pasado 3 años desde que se vió envuelta en una situación la cuál le requirió una transfusión de sangre la cuál fué proporcionada por el Hemocentro Maldonado.',
      image: coverMaria,
    },
    {
      name: 'Franco',
      description:
        'Luego de sufrir un accidente se encontró bajo la necesidad de sangre, así fué como conoció el Hemocentro Maldonado, hoy se encuentra recuperada y feliz!',
      image: coverFranco,
    },
  ])
  const [actualIndex, setActualIndex] = useState(0)

  const handleChangeHeroImage = (targetTestimonialId) => {
    setActualIndex(targetTestimonialId)
  }
  return (
    <Layout
      main={
        <main className="row-[1/3] col-[1/2]">
          <Hero
            backgroundImageUrl={
              testimonials[actualIndex].image.src ||
              'https://placeimg.com/1000/800/arch'
            }
          >
            <div className="flex flex-col w-full md:flex-row [ container gap-8 mt-24 ]">
              <div className="grid flex-grow rounded-box place-items-start [ basis-full text-start gap-4 ]">
                <h1>
                  <span className="text-primary block">Un donante</span>
                  cuatro vidas
                </h1>
                <p>
                  El Hemocentro es un servicio de Medicina Transfusional y Banco
                  de Leche Materna, de referencia regional, centralizando la
                  donación de sangre. Producción de hemocomponentes, cumpliendo
                  con los estándares nacionales e internacionales de calidad y
                  seguridad, racionalizando y optimizando los recursos humanos,
                  económicos, técnicos, educando y promoviendo la donación
                  voluntaria. Altruista y repetitiva.
                </p>
                <Link href="/donate">
                  <a>
                    <PrimaryButton>QUIERO DONAR</PrimaryButton>
                  </a>
                </Link>
              </div>
              <div className="grid flex-grow rounded-box place-items-center [ basis-full gap-4 md:justify-end ]">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    title={testimonial.name}
                    imageUrl={testimonial.image.src}
                    className={actualIndex == index ? '' : 'hidden'}
                    key={index}
                  >
                    {testimonial.description}
                  </TestimonialCard>
                ))}
                <div className="grid grid-flow-col gap-2">
                  {testimonials.map((testimonial, index) => (
                    <RoundedSmall
                      key={index}
                      onClick={() => handleChangeHeroImage(index)}
                      className={actualIndex == index ? 'bg-primary' : ''}
                    ></RoundedSmall>
                  ))}
                </div>
              </div>
            </div>
          </Hero>
          <ContainerSeparator>
            <Container>
              <section className="grid md:grid-cols-2 gap-4 md:gap-16">
                <div className="grid justify-items-start gap-4">
                  <h2>Hemocentro</h2>
                  <p>
                    Desde el 2009 somos el primer centro de donación de sangre y
                    de producción de hemocomponentes de la región Este de
                    Uruguay, centralizamos el procesa miento y abastecimiento,
                    promovemos la donación de sangre voluntaria, altruista y
                    repetitiva a través de un cam bio cultural que permite
                    sostener el modelo, recibimos estu diantes para completar su
                    formación y favorecemos la investi gación en medicina
                    transfusional.
                  </p>
                  <p>
                    En estos diez años hemos obtenido logros que nos hacen afron
                    tar el futuro de la mejor manera. Nuestros resultados
                    destaca dos están en el posicionamiento que tiene el
                    Hemocentro en los ciudadanos de la región quienes no solo
                    conocen nuestra institución sino que nos reconocen como un
                    banco de sangre vinculado a la comunidad. Hemos logrado la
                    apropiación y el sentido de pertenencia, un capital
                    invalorable. Tenemos un equipo de funcionarios comprometidos
                    y apasionados por su tarea, rigurosos en el trabajo porque
                    saben que su función es dar vida. Por ello, cumplimos con
                    los más altos estándares de calidad y cada día apostamos a
                    ser mejores.
                  </p>
                  <PrimaryOutlineButton>Conocer más</PrimaryOutlineButton>
                </div>
                <div className="row-start-1 md:row-start-auto">
                  <img
                    className="rounded"
                    src={hemocentroImage.src}
                    alt="hemocentro foto"
                  />
                </div>
              </section>
            </Container>

            <Container>
              <section className="grid md:grid-cols-2 gap-4 md:gap-16">
                <div>
                  <img
                    src={hemocentroImage.src}
                    className="rounded"
                    alt="hemocentro foto"
                  />
                </div>
                <div className="grid justify-items-start gap-4">
                  <h2>Hemocentro</h2>
                  <p>
                    Desde el 2009 somos el primer centro de donación de sangre y
                    de producción de hemocomponentes de la región Este de
                    Uruguay, centralizamos el procesa miento y abastecimiento,
                    promovemos la donación de sangre voluntaria, altruista y
                    repetitiva a través de un cam bio cultural que permite
                    sostener el modelo, recibimos estu diantes para completar su
                    formación y favorecemos la investi gación en medicina
                    transfusional.
                  </p>
                  <p>
                    En estos diez años hemos obtenido logros que nos hacen afron
                    tar el futuro de la mejor manera. Nuestros resultados
                    destaca dos están en el posicionamiento que tiene el
                    Hemocentro en los ciudadanos de la región quienes no solo
                    conocen nuestra institución sino que nos reconocen como un
                    banco de sangre vinculado a la comunidad. Hemos logrado la
                    apropiación y el sentido de pertenencia, un capital
                    invalorable. Tenemos un equipo de funcionarios comprometidos
                    y apasionados por su tarea, rigurosos en el trabajo porque
                    saben que su función es dar vida. Por ello, cumplimos con
                    los más altos estándares de calidad y cada día apostamos a
                    ser mejores.
                  </p>
                  <PrimaryOutlineButton>Conocer más</PrimaryOutlineButton>
                </div>
              </section>
            </Container>

            <Container>
              <section className="grid gap-6 md:gap-12">
                <h2 className="text-center">Quienes apoyan</h2>
                <ContainerGrid className="grid-cols-1 md:grid-cols-3 justify-items-center gap-6 md:gap-12">
                  <img
                    src={logoAsse.src}
                    alt="logoAsse"
                    className="max-w-xs w-full"
                  />
                  <img
                    src={logoHemovida.src}
                    alt="logoHemovida"
                    className="max-w-xs w-full"
                  />
                  <img
                    src={logoSns.src}
                    alt="logoSns"
                    className="max-w-xs w-full"
                  />
                </ContainerGrid>
              </section>
            </Container>

            <Container>
              <RecentArticles {...{ articles }} />
            </Container>
          </ContainerSeparator>
        </main>
      }
    ></Layout>
  )
}

export async function getStaticProps() {
  const articles = await getArticles()
  return {
    props: { articles },
  }
}
