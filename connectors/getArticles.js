// import { articles as articlesFromLocalDb } from 'db/index'
import localArticles from 'db/articles.json'
import { resolveBasePath } from 'utils/index'

export async function getArticles() {
  try {
    const articlesHasura = await getArticlesHasura()
    const articlesParsed = await parseArticles(articlesHasura)
    const articles = [...articlesParsed]
    return articles
  } catch (error) {
    console.log(error)
    const articlesParsed = await parseArticles(localArticles)
    const articles = [...articlesParsed]
    return articles
  }
}

export async function parseArticles(articles) {
  // parser function to compatibility with Project
  const articlesParsed = articles.map(
    ({ id, published, date, subtitle, title, description, cover }) => {
      return {
        id,
        published,
        date,
        subtitle,
        title,
        description,
        cover: { url: resolveBasePath(cover) },
      }
    }
  )
  return articlesParsed
}

export async function getArticlesHasura() {
  const query = `
    query MyQuery {
      articles {
        id
        published
        date: created_at
        subtitle
        title
        description
        cover
      }
    }
  `
  const hasuraSecret = process.env.HASURA_ADMIN_SECRET
  const response = await fetch(
    'https://clever-mollusk-49.hasura.app/v1/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': `${hasuraSecret}`,
      },
      body: JSON.stringify({ query: query }),
    }
  )
  const {
    data: { articles },
  } = await response.json()

  return articles
}
