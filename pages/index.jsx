import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Hero from 'components/Hero'
import coverMaria from 'img/cover-maria.jpg'
import PrimaryButton from 'components/buttons/PrimaryButton'
import TestimonialCard from 'components/cards/TestimonialCard'
import RoundedSmall from 'components/buttons/RoundedSmall'
import { configs } from 'db'
import { useState } from 'react'

export default function Home() {
  const [testimonials] = useState(configs.testimonials)
  const [testimonial, setTestimonial] = useState(configs.testimonials[0])
  const handleChangeHeroImage = (targetTestimonialId) => {
    setTestimonial(testimonials[targetTestimonialId])
  }
  console.log(testimonial)
  return (
    <Layout
      main={
        <main className="row-[1/3] col-[1/2]">
          <Hero
            backgroundImageUrl={
              testimonial.image.src || 'https://placeimg.com/1000/800/arch'
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
              {/* <div className="divider lg:divider-horizontal">OR</div> */}
              <div className="grid flex-grow rounded-box place-items-center [ basis-full ]">
                <TestimonialCard
                  title={testimonial.name}
                  urlImage={testimonial.image.src}
                >
                  {testimonial.description}
                </TestimonialCard>
                <div className="grid grid-flow-col">
                  {testimonials.map((testimonial, index) => (
                    <RoundedSmall
                      key={index}
                      onClick={() => handleChangeHeroImage(index)}
                    ></RoundedSmall>
                  ))}
                </div>
              </div>
            </div>
          </Hero>
          <Container>content inside container</Container>
        </main>
      }
    ></Layout>
  )
}
