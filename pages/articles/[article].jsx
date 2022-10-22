import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import { useRouter } from 'next/router'

export default function Article() {
  const {
    query: { article },
  } = useRouter()
  return (
    <Layout>
      <Container>artículo: {article}</Container>
    </Layout>
  )
}
