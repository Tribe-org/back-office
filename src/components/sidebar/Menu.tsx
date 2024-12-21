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
import { cn } from "@/lib/utils";
import { type MenuItem } from "@/types";

import SubMenu from "./SubMenu";

interface SidebarMenuProps {
  item: MenuItem[number];
  page: string;
}

export default function Menu({ item, page }: SidebarMenuProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-tribe-informative">
        {item.groupTitle}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {item.menu.map(({ title, menu, url = "#" }) => {
            const isActive = url.includes(page);
            const hasSubMenu = Array.isArray(menu);

            if (hasSubMenu) {
              return (
                <SubMenu key={title} title={title} menu={menu!} page={page} />
              );
            }

            return (
              <SidebarMenuItem key={title}>
                <SidebarMenuSub>
                  <SidebarMenuSubItem
                    className={cn("text-sm", isActive && "font-bold underline")}
                  >
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
