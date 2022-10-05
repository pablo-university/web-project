import Drawer from "components/drawer/index";

export default function LayoutWithDrawer({children}) {
  return (
    <Drawer aside={<p>content drawer</p>}>{children}</Drawer>
  )
}
