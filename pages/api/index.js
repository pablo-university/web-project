import { getArticlesBeta, getArticlesHasura } from 'connectors/getArticles'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  res.status(200).json(await getArticlesHasura())
}
