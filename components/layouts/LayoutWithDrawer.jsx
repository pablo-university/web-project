import Drawer from "components/drawer/index";
import Menu from "components/menu";
import Layout from "components/layouts/Layout";

export default function LayoutWithDrawer({ children }) {
  return (
    <Drawer aside={<p>content drawer</p>}>
      <Layout>{children}</Layout>
    </Drawer>
  );
}
