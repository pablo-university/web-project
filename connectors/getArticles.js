import { articles as articlesFromLocalDb } from 'db/index'
import { resolveBasePath } from 'utils/index'

export async function getArticles() {
  const articlesHasura = await getArticlesHasura()
  const articles = [...articlesHasura, ...articlesFromLocalDb]
  return articles
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
  // parser function to compatibility with Project
  const articlesParsed = articles.map(
    ({
      id,
      published,
      date,
      subtitle,
      title,
      description,
      cover,
    }) => {
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
