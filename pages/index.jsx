import LayoutWithDrawer from "components/layouts/LayoutWithDrawer";

export default function Home() {
  return (
    <LayoutWithDrawer>
      ---botones----
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <p className="bg-primary">prueba texto</p>
    </LayoutWithDrawer>
  );
}
