import Drawer from "components/drawer/index";

export default function LayoutWithDrawer({children}) {
  return (
    <Drawer>{children}</Drawer>
  )
}
