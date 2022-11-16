import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ArticleCard from 'components/cards/ArticleCard'
import { getArticles } from 'connectors/getArticles'
import Heading from 'components/layouts/Heading'
import Alert from 'components/Alert'
import RecentArticles from 'components/RecentArticles'
import defaultSvg from 'img/articles/default.svg'

export default function Article({
  article: {
    title,
    subtitle,
    description,
    date,
    cover: { url: coverSrc },
    published,
  },
  articles,
}) {
  return (
    <Layout>
      {published ? (
        <ContainerSeparator>
          <Container>
            {title && (
              <Heading title={title} imageUrl={defaultSvg.src}>
                <p className="line-clamp-3">{description}</p>
                <time dateTime={date}>{date}</time>
              </Heading>
            )}
          </Container>

          <div className="md:container 2xl:m-auto">
            <img
              className="object-cover aspect-video md:w-3/4"
              src={coverSrc}
              alt="cover image"
            />
          </div>

          <Container>
            <ContainerGrid className="md:grid-cols-2 gap-6">
              <div className="grid gap-6 content-start">
                <h3>{subtitle}</h3>
                <p>{description}</p>
              </div>
            </ContainerGrid>
          </Container>
        </ContainerSeparator>
      ) : (
        <Container>
          <Alert className={'alert-warning'}>
            Este artículo aún no ha sido publicado, lo sentimos mucho
          </Alert>
        </Container>
      )}
      {articles.length > 3 && <RecentArticles {...{ articles }} />}
    </Layout>
  )
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const articles = await getArticles()
  const paths = articles.map((article, index) => {
    return {
      params: {
        id: `${article.id}`,
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
  const articles = await getArticles()
  const article = articles.find((article) => article.id == id)
  return {
    // Passed to the page component as props
    props: { article, articles },
  }
}
