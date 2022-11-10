import { articles } from 'db'

export async function getArticles() {
  return articles
}

export async function getArticlesBeta() {
  const myQuery = `{
    AllArticles{
      id,
      createdAt,
      updatedAt,
      title,
      subtitle,
      description,
      date,
      cover{url},
      coverExtension{url}
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
  const data = await response.json();
  console.log(data);
  return data;
}
