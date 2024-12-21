import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { type MenuItem } from "@/types";

import SubMenu from "./SubMenu";

interface SidebarMenuProps {
  item: MenuItem[number];
}

export default function Menu({ item }: SidebarMenuProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-tribe-informative">
        {item.groupTitle}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {item.menu.map(({ title, menu, url = "#" }) => {
            const hasSubMenu = Array.isArray(menu);

            if (hasSubMenu) {
              return <SubMenu key={title} title={title} menu={menu!} />;
            }

            return (
              <SidebarMenuItem key={title}>
                <SidebarMenuSub>
                  <SidebarMenuSubItem className="text-sm">
                    <Link href={url} className="flex items-center gap-2">
                      {title}
                    </Link>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
