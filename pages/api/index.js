import { getArticlesBeta } from 'connectors/getArticles'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  getArticlesBeta()
  res.status(200).json(getArticlesBeta())
}
