import { articles as articlesFromLocalDb } from "db/index";

export async function getArticles() {
  const articlesBeta = await getArticlesBeta();
  const articles = [...articlesBeta, ...articlesFromLocalDb]
  return articles;
}

export async function getArticlesBeta() {
  const myQuery = `{
   AllArticles{
      id,
      date: createdAt,
      updatedAt,
      title,
      subtitle,
      description,
      cover{url},
      coverExtension{url},
      published
    }
  }`
  const apiRocketKey = process.env.API_ROCKET_KEY

  const response = await fetch('https://graphql.apirocket.io', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiRocketKey}`,
    },
    body: JSON.stringify({ query: myQuery }),
  })
  const { data: { AllArticles } } = await response.json();
  return AllArticles;
}

export async function getArticlesHasura() {
  const query = `
    query MyQuery {
      articles {
        id
        published
        subtitle
        title
        description
        cover_extension
        cover
      }
    }
  `;
  const hasuraSecret = process.env.HASURA_ADMIN_SECRET
  const response = await fetch('https://clever-mollusk-49.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': `${hasuraSecret}`,
    },
    body: JSON.stringify({ query: query }),
  })
  const data = await response.json();
  return data
}
