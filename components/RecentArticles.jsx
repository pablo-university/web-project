import Link from 'next/link'
import Container from 'components/layouts/Container'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ArticleCard from 'components/cards/ArticleCard'

export default function RecentArticles({ articles }) {
  return (
    <>
      {articles && (
        <Container>
          <section className="grid gap-6 md:gap-12">
            <h2>Artículos recientes</h2>
            <ContainerGrid className="grid-cols-1 md:grid-cols-3 justify-items-center gap-6">
              {articles.map(
                (
                  { id, title, description, date, cover: { url }, published },
                  index
                ) =>
                  index < 3 &&
                  published && (
                    <Link key={index} href={`/articles/${id}`}>
                      <a className="grid">
                        <ArticleCard title={title} date={date} imageSrc={url}>
                          {description}
                        </ArticleCard>
                      </a>
                    </Link>
                  )
              )}
            </ContainerGrid>
          </section>
        </Container>
      )}
    </>
  )
}
