export async function getArticles() {
  return await getArticlesBeta()
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
