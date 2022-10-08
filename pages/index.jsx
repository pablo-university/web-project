import LayoutWithDrawer from "components/layouts/LayoutWithDrawer";
import Container from "components/layouts/Container";

export default function Home() {
  return (
    <LayoutWithDrawer>
      <Container>
        ---botones----
        <button className="btn">Button</button>
        <button className="btn btn-primary">Button</button>
        <button className="btn btn-secondary">Button</button>
        <p className="bg-primary">prueba texto</p>
      </Container>
    </LayoutWithDrawer>
  );
}
