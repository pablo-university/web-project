import LayoutWithDrawer from "components/layouts/LayoutWithDrawer";
import Trigger from "components/drawer/Trigger";

export default function Home() {
  return (
    <LayoutWithDrawer>
      <Trigger>trigger!</Trigger>
      ---botones----
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <p className="bg-primary">prueba texto</p>
    </LayoutWithDrawer>
  );
}
