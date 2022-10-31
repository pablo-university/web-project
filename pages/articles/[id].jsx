import { useState, useEffect } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ArticleCard from 'components/cards/ArticleCard'
import { useRouter } from 'next/router'
import { articles } from 'db'
import Heading from 'components/layouts/Heading'
import DbContext, { useContext } from 'context/db'

export default function Article({
  article: {
    title,
    description,
    date,
    thumbnail: { thumbnailSrc },
  },
}) {
  return (
    <Layout>
      <ContainerSeparator>
        <Container>
          {title && (
            <Heading
              title={title}
              description={description}
              imageUrl={thumbnailSrc}
            >
              <time dateTime={date}>{date}</time>
            </Heading>
          )}
        </Container>

        <Container>{/* <img src={coverSrc} alt="asd" /> */}</Container>

        <Container>
          <section className="grid gap-6 md:gap-12">
            <h2>Artículos recientes</h2>
            <ContainerGrid className="grid-cols-1 md:grid-cols-3 justify-items-center gap-6">
              {articles.map(
                ({ title, description, date, thumbnail: { src } }, index) =>
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
