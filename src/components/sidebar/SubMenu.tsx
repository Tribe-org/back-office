"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { type MenuItem } from "@/types";

interface SubMenuProps {
  title: string;
  menu: MenuItem[number]["menu"];
}

export default function SubMenu({ title, menu }: SubMenuProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Collapsible className="group/collapsible" onClick={handleToggleMenu}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="flex items-center justify-between">
            <span>{title}</span>
            {isOpened ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {menu.map(({ title, url = "#" }) => (
              <SidebarMenuSubItem key={title} className="text-xs">
                <Link href={url} className="flex items-center gap-2">
                  {title}
                </Link>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
