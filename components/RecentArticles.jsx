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
                ({ title, description, date, cover: { src } }, index) =>
                  index < 3 && (
                    <Link key={index} href={`/articles/${index}`}>
                      <a className="grid">
                        <ArticleCard title={title} date={date} imageSrc={src}>
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
