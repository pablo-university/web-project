import { useState } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Hero from 'components/Hero'
import PrimaryButton from 'components/buttons/PrimaryButton'
import TestimonialCard from 'components/cards/TestimonialCard'
import RoundedSmall from 'components/buttons/RoundedSmall'
import PrimaryOutlineButton from 'components/buttons/PrimaryOutlineButton'
import { configs } from 'db'
import hemocentroImage from 'img/home/hemocentro.jpg'
import hemobusImage from 'img/home/hemobus.jpg'

export default function Home() {
  const [testimonials] = useState(configs.testimonials)
  const [actualIndex, setActualIndex] = useState(0)

  const handleChangeHeroImage = (targetTestimonialId) => {
    setActualIndex(targetTestimonialId)
  }
  console.log(actualIndex)
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
            <div className="flex flex-col w-full lg:flex-row [ container gap-8 mt-24 ]">
              <div className="grid flex-grow rounded-box place-items-start [ basis-full text-start gap-4 ]">
                <h1 className="text-5xl lg:text-8xl font-bold">
                  <span className="text-primary block">Un donante</span>
                  cuatro vidas
                </h1>
                <p>
                  El Hemocentro es un servicio de Medicina Transfusional y Banco
                  de Leche Materna, de referencia regional, centralizando la
                  donación de sangre y leche materna y la producción de
                  hemocomponentes, cumpliendo con los estándares nacionales e
                  internacionales de calidad y seguridad, racionalizando y
                  optimizando los recursos humanos, económicos y técnicos,
                  educando y promoviendo la donación voluntaria, altruista y
                  repetitiva.
                </p>
                <PrimaryButton>QUIERO DONAR</PrimaryButton>
              </div>
              <div className="grid flex-grow rounded-box place-items-center [ basis-full gap-4 ]">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    title={testimonial.name}
                    imageUrl={testimonial.image.src}
                    className={actualIndex == index ? '' : 'hidden'}
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
          <Container>
            <div className="grid md:grid-cols-2 gap-4 md:gap-16">
              <div className="grid justify-items-start gap-4">
                <h2 className="text-4xl">Hemocentro</h2>
                <p>
                  Desde el 2009 somos el primer centro de donación de sangre y
                  de producción de hemocomponentes de la región Este de Uruguay,
                  centralizamos el procesa miento y abastecimiento, promovemos
                  la donación de sangre voluntaria, altruista y repetitiva a
                  través de un cam bio cultural que permite sostener el modelo,
                  recibimos estu diantes para completar su formación y
                  favorecemos la investi gación en medicina transfusional.
                </p>
                <p>
                  En estos diez años hemos obtenido logros que nos hacen afron
                  tar el futuro de la mejor manera. Nuestros resultados destaca
                  dos están en el posicionamiento que tiene el Hemocentro en los
                  ciudadanos de la región quienes no solo conocen nuestra
                  institución sino que nos reconocen como un banco de sangre
                  vinculado a la comunidad. Hemos logrado la apropiación y el
                  sentido de pertenencia, un capital invalorable. Tenemos un
                  equipo de funcionarios comprometidos y apasionados por su
                  tarea, rigurosos en el trabajo porque saben que su función es
                  dar vida. Por ello, cumplimos con los más altos estándares de
                  calidad y cada día apostamos a ser mejores.
                </p>
                <PrimaryOutlineButton>Conocer más</PrimaryOutlineButton>
              </div>
              <div className="">
                <img src={hemocentroImage.src} alt="hemocentro foto" />
              </div>
            </div>
          </Container>
        </main>
      }
    ></Layout>
  )
}
