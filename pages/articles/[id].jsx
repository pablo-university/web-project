import { useState, useEffect } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ArticleCard from 'components/cards/ArticleCard'
import { articles } from 'db'
import Heading from 'components/layouts/Heading'

export default function Article({
  article: {
    title,
    subtitle,
    description,
    date,
    thumbnail: { src: thumbnailSrc },
    cover: { src: coverSrc },
    coverExtension: { src: coverExtensionSrc },
  },
}) {
  // const getFirstContentOfArticle = (string)=>string.slice()
  return (
    <Layout>
      <ContainerSeparator>
        <Container>
          {title && (
            <Heading title={title} imageUrl={thumbnailSrc}>
              <p className="line-clamp-3">{description}</p>
              <time dateTime={date}>{date}</time>
            </Heading>
          )}
        </Container>

        <img className="md:pr-20" src={coverSrc} alt="cover image" />

        <Container>
          <ContainerGrid className="md:grid-cols-2 gap-6">
            <div className="grid gap-6 content-start">
              <h3>{subtitle}</h3>
              <p>{description}</p>
            </div>
            <img src={coverExtensionSrc} alt="cover image" />
          </ContainerGrid>
        </Container>

        <Container>
          <section className="grid gap-6 md:gap-12">
            <h2>Artículos recientes</h2>
            <ContainerGrid className="grid-cols-1 md:grid-cols-3 justify-items-center gap-6">
              {articles.map(
                ({ title, description, date, cover: { src } }, index) =>
                  index < 3 && (
                    <ArticleCard
                      key={index}
                      title={title}
                      date={date}
                      imageSrc={src}
                    >
                      {description}
                    </ArticleCard>
                  )
              )}
            </ContainerGrid>
          </section>
        </Container>
      </ContainerSeparator>
    </Layout>
  )
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const paths = articles.map((article, index) => {
    return {
      params: {
        id: `${index}`,
      },
    }
  })
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { id } }) {
  const article = articles[id]
  console.log(article)
  return {
    // Passed to the page component as props
    props: { article },
  }
}
