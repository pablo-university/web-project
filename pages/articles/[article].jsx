import LayoutWithDrawer from "components/layouts/LayoutWithDrawer";
import Container from "components/layouts/Container";
import { useRouter } from "next/router";

export default function Article() {
  const {
    query: { article },
  } = useRouter();
  return (
    <LayoutWithDrawer>
      <Container>artículo: {article}</Container>
    </LayoutWithDrawer>
  );
}
