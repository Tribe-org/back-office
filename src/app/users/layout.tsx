import "../globals.css";

import type { Metadata } from "next";

import AppSidebar from "@/components/sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "회원 관리",
  description: "회원 조회 및 회원 목록을 볼 수 있는 화면입니다.",
};

export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("UsersLayout");

  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar page="/users" />
          <main className="relative">
            {children}
            <SidebarTrigger className="absolute left-0 top-0" />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
