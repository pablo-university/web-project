import Drawer from "components/drawer/index";
import Menu from "components/menu";

export default function LayoutWithDrawer({ children }) {
  return (
    <Drawer aside={<p>content drawer</p>}>
      <header>
        <Menu></Menu>
      </header>
      <main>{children}</main>
    </Drawer>
  );
}
