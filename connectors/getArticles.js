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

  fetch('https://graphql.apirocket.io', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiRocketKey}`,
    },
    body: JSON.stringify({ query: myQuery }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.data)
      return json.data
    })
    .catch((err) => {
      console.error(err)
    })
}
