"use client";

import { usePathname } from "next/navigation";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { routers } from "@/routers";

import Menu from "./Menu";

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        {routers.map((item) => {
          return <Menu key={item.groupTitle} page={pathname} item={item} />;
        })}
      </SidebarContent>
    </Sidebar>
  );
}
