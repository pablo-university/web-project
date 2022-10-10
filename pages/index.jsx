import LayoutWithDrawer from "components/layouts/LayoutWithDrawer";
import Container from "components/layouts/Container";

export default function Home() {
  return (
    <LayoutWithDrawer>
      <Container>
        home
        <p className="text-red-700 bg-zinc-400 px-3">color</p>
      </Container>
    </LayoutWithDrawer>
  );
}
